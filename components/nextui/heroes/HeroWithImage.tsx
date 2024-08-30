// components/HeroWithImage.tsx
import React from "react";
import clsx from "clsx";
import { Grid, GridContainer } from "../Grid";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { StaticImageData } from "next/image";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import { CardHeader } from "@mui/material";

type HeroWithImageProps = {
  title: string;
  subtitle?: string;
  imageSrc?: StaticImageData;
  imagePosition?: "left" | "right"; // Position of the image
  callToAction?: React.ReactNode;
  className?: string;
};

type ImageCardProps = {
  image: StaticImageData;
  subtitle?: string;
};

export const HeroWithImageTop: React.FC = () => {
  return (
    <>
      <header className="w-full h-96 bg-[url('https://www.slingacademy.com/wp-content/uploads/2022/10/hero-image-example.webp')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">
            WELCOME TO
            <span className="text-amber-500">SLING ACADEMY</span>
          </h1>
          <p className="mt-5 text-center text-lg text-white opacity-70">
            This webiste is about programming and things like that
          </p>
          <a
            className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
            href="#"
          >
            Get Started
          </a>
        </div>
      </header>
      <div className="container p-20">
        <h1 className="text-4xl">Other Content</h1>
      </div>
    </>
  );
};

export const HeroWithImageRight = () => (
  <div className="h-screen bg-gray-50 flex items-center">
    <section className="bg-cover bg-center py-32 w-full">
      <div className="container mx-auto text-left text-white">
        <div className="flex items-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-medium mb-6">Welcome to My Agency</h1>
            <p className="text-xl mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
            </p>
            <a
              href="#"
              className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
            >
              Demo
            </a>
          </div>
          <div className="w-1/2 pl-16">
            <Image
              src="https://source.unsplash.com/random?ux"
              className="h-64 w-full object-cover rounded-xl"
              alt="Layout Image"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);
