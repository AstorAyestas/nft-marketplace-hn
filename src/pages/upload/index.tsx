import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ethers } from "ethers";
import NFT from "../../interfaces/NFT";
import { marketplaceAddress } from "../../config";
import NFTMarketplace from "../../artifacts/src/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import { useMetaMask } from "metamask-react";
import Web3Modal from "web3modal";
import toast, { Toaster } from "react-hot-toast";

const Upload: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<NFT>();
  const router = useRouter();
  const notify = () => toast.error("Metamask no instalado");

  const client = ipfsHttpClient({ url: "https://ipfs.infura.io:5001/api/v0" });
  const FileSelected = useWatch({ name: "file", control });
  const { status } = useMetaMask();
  const onSubmit: SubmitHandler<NFT> = async (data) => {
    if (status === "unavailable") {
      notify();
      console.log("wallet not unavailable");
    } else {
      const { name, description, price, file } = data;

      try {
        const imgResult = await client.add(file[0]);
        const image = `https://ipfs.infura.io/ipfs/${imgResult.path}`;
        const result = await client.add(
          JSON.stringify({ image, name, description, price })
        );
        mintTheNFT(result, price);
      } catch (error) {
        console.error("error in upload to ipfs action", error);
      }
    }
  };

  const mintTheNFT = async (result: { path: string }, NFTPrice: number) => {
    const web3Modal = new Web3Modal();
    const ethereum = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const price = ethers.utils.parseUnits(NFTPrice.toString(), "ether");
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();
    const url = `https://ipfs.infura.io/ipfs/${result.path}`;
    const transaction = await contract.createToken(url, price, {
      value: listingPrice,
    });
    await transaction.wait();
    router.push("/");
  };

  return (
    <div className="mx-4 mt-8 flex flex-col items-center justify-center space-y-4">
      <h1 className="leading-2 mb-4 text-2xl font-semibold text-gray-600">
        Crear nuevo activo digital
      </h1>
      <form
        className="grid grid-cols-1 gap-6"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-xs text-gray-500 ">
          Tipos de archivo soportados: JPG, PNG, JPE, WEBP
        </span>
        <div className="flex items-center">
          {FileSelected && (
            <img
              src={URL.createObjectURL(FileSelected[0])}
              alt="preview"
              className="mr-4 h-16 w-16 rounded-full object-cover"
            />
          )}
          <label className="block">
            <input
              {...register("file", { required: true })}
              accept=".png, .jpg, .jpe, .webp"
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blueTurquoise-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blueTurquoise-700 hover:file:bg-blueTurquoise-100"
            />
          </label>
          {errors.file && (
            <strong className="ml-2 text-xs text-red-400">
              Es un campo requerido
            </strong>
          )}
        </div>

        <label className="block">
          <span className="text-gray-600">Nombre</span>
          <input
            {...register("name", { required: true })}
            type="text"
            className="mt-1 block w-full rounded-md border-transparent bg-slate-100 focus:border-slate-500 focus:bg-white focus:ring-0"
          />
          {errors.name && (
            <strong className="text-xs text-red-400">
              Nombre es un campo requerido
            </strong>
          )}
        </label>
        <label className="block">
          <span className="text-gray-600">Precio</span>
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
        <label className="block">
          <span className="text-gray-600">Descripci??n</span>
          <textarea
            {...register("description", { required: true })}
            className="mt-1 block w-full resize-none rounded-md border-transparent bg-slate-100 focus:border-slate-500 focus:bg-white focus:ring-0"
            rows={3}
            spellCheck={false}
          ></textarea>
          {errors.description && (
            <strong className="text-xs text-red-400">
              Descripci??n es un campo requerido
            </strong>
          )}
        </label>
        <input
          type="submit"
          value="Cargar"
          className="rounded border border-blueTurquoise-700 bg-blueTurquoise-500 px-4 py-2 font-bold text-white hover:bg-blueTurquoise-700"
        />
      </form>
      <Toaster />
    </div>
  );
};

export default Upload;
