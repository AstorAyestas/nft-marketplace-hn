import { ethers } from "ethers";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useMetaMask } from "metamask-react";
import Web3Modal from "web3modal";
import { marketplaceAddress } from "../config";
import NFTMarketplace from "../artifacts/src/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import Asset from "../interfaces/Asset";
import Card from "../components/card";
import Wallet from "../components/wallet";

const Home: NextPage = () => {
  const [assets, setAssets] = useState<Asset[]>();
  const { status } = useMetaMask();

  const notify = () => toast.error("Metamask no instalado");

  const buyNFT = async (asset: Asset) => {
    if (status === "unavailable") {
      console.log("wallet not connected");
      notify();
    } else {
      const web3Modal = new Web3Modal();
      const ethereum = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        marketplaceAddress,
        NFTMarketplace.abi,
        signer
      );
      const price = ethers.utils.parseUnits(asset.price.toString(), "ether");
      const transaction = await contract.createMarketSale(asset.tokenId, {
        value: price,
      });
      await transaction.wait();
      getItems();
    }
  };

  const getItems = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      provider
    );
    const data = await contract.fetchMarketItems();

    const assets = await Promise.all(
      data.map(
        async (item: {
          tokenId: { toNumber: () => any };
          price: { toString: () => ethers.BigNumberish };
          seller: any;
          owner: any;
        }) => {
          const tokenUri = await contract.tokenURI(item.tokenId);
          const ipfsData = await fetch(tokenUri);
          const response = await ipfsData.json();
          const price = ethers.utils.formatUnits(
            item.price.toString(),
            "ether"
          );
          const asset = {
            price,
            tokenId: item.tokenId.toNumber(),
            seller: item.seller,
            owner: item.owner,
            image: response.image,
            name: response.name,
            description: response.description,
          };
          console.log(asset);
          return asset;
        }
      )
    );
    setAssets(assets);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <article className="mx-4 flex flex-col justify-center">
      <Wallet />
      <h2 className="my-4 text-2xl text-gray-600">Todos los NFTS</h2>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {assets?.map((asset) => (
          <Card key={asset.tokenId} asset={asset}>
            <button
              className="rounded border border-blueTurquoise-700 bg-blueTurquoise-500 px-4 py-2 font-bold text-white hover:bg-blueTurquoise-700"
              onClick={() => buyNFT(asset)}
            >
              Comprar
            </button>
          </Card>
        ))}
      </section>
      <Toaster />
    </article>
  );
};

export default Home;
