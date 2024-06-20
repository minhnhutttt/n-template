"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import DialogSlider from "./components/DialogSlider";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const data = [
  {
    image: "/assets/images/img.png",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        説明テキスト説明テキスト説明 <br />
        テキスト説明テキスト説明…
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        説明テキスト説明テキスト説明 <br />
        テキスト説明テキスト説明…
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        説明テキスト説明テキスト説明 <br />
        テキスト説明テキスト説明…
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        説明テキスト説明テキスト説明 <br />
        テキスト説明テキスト説明…
      </>
    ),
  },
];
export default function Home() {

  return (
    <main className="">
      <div className="flex w-96 mx-auto gap-4">
        <a href="/org" className="w-1/2 font-bold text-3xl h-20 border flex items-center justify-center text-center rounded-2xl">.org</a>
        <a href="/com" className="w-1/2 font-bold text-3xl h-20 border flex items-center justify-center text-center rounded-2xl">.com</a>
      </div>
    </main>
  );
}
