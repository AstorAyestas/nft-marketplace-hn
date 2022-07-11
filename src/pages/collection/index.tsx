import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Web3Modal from "web3modal";
import { NextPage } from "next/types";
import Asset from "../../interfaces/Asset";
import { marketplaceAddress } from "../../config";
import NFTMarketplace from "../../artifacts/src/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import Card from "../../components/card";
import Confirmation from "../../components/confirmation";
import { useMetaMask } from "metamask-react";
import Wallet from "../../components/wallet";

const Collection: NextPage = () => {
  const [assets, setAssets] = useState<Asset[]>();
  const notify = () => toast.error("Metamask no instalado");
  const { status } = useMetaMask();
  const getItems = async () => {
    const web3Modal = new Web3Modal();
    const ethereum = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await marketplaceContract.fetchMyNFTs();

    const assets = await Promise.all(
      data.map(
        async (item: {
          tokenId: { toNumber: () => any };
          price: { toString: () => ethers.BigNumberish };
          seller: any;
          owner: any;
        }) => {
          const tokenUri = await marketplaceContract.tokenURI(item.tokenId);
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
    if (status === "unavailable") {
      console.log("wallet not connected");
      notify();
    } else {
      getItems();
    }
  }, []);

  return (
    <article className="mx-4 flex flex-col justify-center">
      <Wallet />
      <h2 className="my-4 text-2xl text-gray-600">Todos mis NFTS</h2>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {assets?.map((asset) => (
          <Card key={asset.tokenId} asset={asset}>
            <Confirmation asset={asset} />
          </Card>
        ))}
      </section>
      <Toaster />
    </article>
  );
};

export default Collection;
