import React from "react";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Web3Modal from "web3modal";

import { ethers } from "ethers";
import Asset from "../interfaces/Asset";
import NFTMarketplace from "../artifacts/src/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import { marketplaceAddress } from "../config";
type Input = {
  price: string;
};

const Confirmation = ({ asset }: { asset: Asset }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Input>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const { price } = data;
    const web3Modal = new Web3Modal();
    const ethereum = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const priceFormatted = ethers.utils.parseUnits(price, "ether");
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    let listingPrice = await contract.getListingPrice();

    listingPrice = listingPrice.toString();
    const transaction = await contract.resellToken(
      asset.tokenId,
      priceFormatted,
      {
        value: listingPrice,
      }
    );
    await transaction.wait();

    router.push("/");
  };

  return (
    <div className="mx-auto w-full rounded-2xl bg-slate-50 p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blueTurquoise-100 px-4 py-2 text-left text-sm font-medium text-blueTurquoise-900 hover:bg-blueTurquoise-200 focus:outline-none focus-visible:ring focus-visible:ring-blueTurquoise-500 focus-visible:ring-opacity-75">
              <span>Poner en venta</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-blueTurquoise-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 ">
              <form
                className="grid grid-cols-1 gap-6"
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="block">
                  <span className="text-xs text-gray-600">Precio</span>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    className="mt-1 block w-full rounded-md border-transparent bg-slate-100 focus:border-slate-500 focus:bg-white focus:ring-0"
                  />
                  {errors.price && (
                    <strong className="text-xs text-red-400">
                      Precio es un campo requerido
                    </strong>
                  )}
                </label>

                <input
                  type="submit"
                  className="rounded border border-blueTurquoise-700 bg-blueTurquoise-500 py-2 text-sm font-bold text-white hover:bg-blueTurquoise-700"
                  value="Vender"
                />
              </form>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Confirmation;
