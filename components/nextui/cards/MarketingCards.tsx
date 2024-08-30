import React from "react";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";

const Card1 = () => (
  <div className="relative w-1/3 bg-slate-500 rounded-2xl">
    <div className="max-h-72">
      <Image
        className="object-cover w-max max-h-72 rounded-xl"
        src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="1"
      />
    </div>
    <div className="capitalize text-4xl font-extrabold rounded-lb-3xl  absolute inset-x-0 bottom-0 max-h-31">
      <span className="box-decoration-clone bg-gray-100 rounded-r-3xl pr-5">
        <span className="text-sm text-center inline-block align-middle pr-5">
          category . Gym | 22 Feb
        </span>
        <br />
        <span className="">best full-body home gym machines!</span>
      </span>
    </div>
  </div>
);

const Card2 = () => (
  <div className="relative w-1/3 bg-slate-500 rounded-2xl">
    <div className="max-h-72">
      <Image
        className="object-cover w-max max-h-72 rounded-xl"
        src="https://images.unsplash.com/photo-1448387473223-5c37445527e7?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="2"
      />
    </div>
    <div className="capitalize text-4xl font-extrabold rounded-lb-3xl  absolute inset-x-0 bottom-0 max-h-31">
      <span className="box-decoration-clone bg-gray-100 rounded-r-3xl pr-5">
        <span className="text-sm text-center inline-block align-middle pr-5">
          category . Gym | 22 Feb
        </span>
        <br />
        <span className="">rdy,go! how to start running to stay fit</span>
      </span>
    </div>
  </div>
);

const Card3 = () => (
  <div className="relative w-1/3 bg-slate-500 rounded-2xl">
    <div className="max-h-72">
      <Image
        className="object-cover w-max max-h-72 rounded-xl"
        src="https://images.unsplash.com/photo-1537289150563-b7f10eee353b?q=80&w=6016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="3"
      />
    </div>
    <div className="capitalize text-4xl font-extrabold rounded-lb-3xl  absolute inset-x-0 bottom-0 max-h-31">
      <span className="box-decoration-clone bg-gray-100 rounded-r-3xl pr-5">
        <span className="text-sm text-center inline-block align-middle pr-5">
          category . Gym | 22 Feb
        </span>
        <br />
        <span className="">overcoming laziness in sports</span>
      </span>
    </div>
  </div>
);

export const MarketingCards = () => (
  <div className="container mx-auto">
    <div className=" flex flex-row gap-4">
      <Card1 />
      <Card2 />
    </div>
  </div>
);
