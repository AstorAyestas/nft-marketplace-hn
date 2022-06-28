import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { NextPage } from "next/types";
import React, { useEffect, useState } from "react";
import Asset from "../../interfaces/Asset";
import { marketplaceAddress } from "../../config";
import NFTMarketplace from "../../artifacts/src/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import Card from "../../components/card";

const Collection: NextPage = () => {
  const [assets, setAssets] = useState<Asset[]>();

  const getItems = async () => {
    const web3Modal = new Web3Modal();

    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
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
    getItems();
  }, []);

  return (
    <article className="mx-4 flex flex-col justify-center">
      <section className="relative w-full overflow-hidden rounded-md shadow-md">
        <img
          className="h-48 w-full object-cover"
          src="https://images.unsplash.com/photo-1624359136353-f60129a367b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="cover image"
        />

        <div className="absolute top-0 left-0 px-6 py-4">
          <h4 className="mb-3 text-3xl font-semibold tracking-tight text-white">
            NFT Marketplace de prueba
          </h4>
          <p className="text-2xl font-bold leading-normal text-white">
            Descubra, coleccione y venda extraordinarios NFTS de arte y cultura
            de Honduras 🇭🇳
          </p>
        </div>
      </section>
      <h2 className="my-4 text-gray-600">Todos mis NFTS</h2>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {assets?.map((asset) => (
          <Card key={asset.tokenId} asset={asset} />
        ))}
      </section>
    </article>
  );
};

export default Collection;
