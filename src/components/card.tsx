import React from "react";
import Image from "next/image";
import Asset from "../interfaces/Asset";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";

const Card = ({
  asset,
  children,
}: {
  asset: Asset;
  children?: React.ReactElement;
}) => {
  return (
    <div className="flex flex-col space-y-1 rounded-md object-cover p-4 shadow-md hover:shadow-lg">
      <Image
        className="rounded-md object-cover"
        src={asset.image}
        alt={`NFT: ${asset.name}`}
        width={500}
        height={500}
      />
      <div className="flex justify-between">
        <strong className=" text-xl font-semibold capitalize tracking-tight text-gray-900">
          {asset.name}
        </strong>
        <span className="bg-gradient-to-r from-cyan-500 to-lime-500 bg-clip-text font-bold text-transparent">
          {asset.price} ETH
        </span>
      </div>
      <div className="flex items-center justify-between ">
        <p className="font-normal capitalize text-gray-700">
          {asset.description}
        </p>
        <Image src={getAvatar(asset.owner)} width={45} height={45} />
      </div>

      {children}
    </div>
  );
};

export function getAvatar(owner: string): string {
  const image = createAvatar(style, {
    seed: owner,
    dataUri: true,
    radius: 50,
  });
  return image;
}
export default Card;
