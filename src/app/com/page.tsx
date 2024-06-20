"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import DialogSlider from "./../components/DialogSlider";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const slider = useRef<any>(null);
  let [isOpenNote, setIsOpenNote] = useState(false);
  let [isOpenAddress, setIsOpenAddress] = useState(false);
  let [isOpenMenu, setIsOpenMenu] = useState(false);
  const notify = () =>
    toast(
      <>
        <span className="text-[15px] font-bold">コピー完了</span>
        <br /> 現在のURLをコピーしました
      </>,
    );

  return (
    <main className="">
      <div className="h-[50vh] bg-slate-900 text-white">
        <div className="border-b flex-1">
          <div className="flex items-center justify-between gap-3 py-4 px-4">
            <div>
              <span className="mr-2 font-black">DECK ID:</span>0xDc39…21d2
            </div>
            <div>/ 34 </div>
          </div>
        </div>
        <div className="h-[calc(50vh-56px)] flex items-center overflow-auto">
            <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto">
                {[...Array(12)].map((_, index) => (
                        <img
                            className="h-[calc(50vh-56px)] w-full object-cover snap-center"
                            src="/assets/images/sauri_009.jpg"
                            alt=""
                            key={index}
                        />
                ))}
            </div>
        </div>
      </div>

      <div
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="fixed right-0 bottom-0 z-50 cursor-pointer bg-white hover:bg-gray-200 max-lg:hidden lg:h-screen lg:w-[60px]"
      >
        <div className="flex h-full items-center justify-center p-4">
          <div className="h-24 text-[12px] font-bold">
            <img
              src="/assets/images/ic-arrow-square.svg"
              className="w-full"
              alt=""
            />
            menu
          </div>
        </div>
      </div>
      <div
        className={`fixed right-0 bottom-0 z-50 w-full max-lg:h-20 max-lg:backdrop-blur-2xl lg:h-screen lg:w-[400px] lg:bg-gray-100 ${isOpenMenu ? "lg:visible lg:opacity-100" : "lg:invisible lg:opacity-0"}`}
      >
        <div className="h-full px-4 lg:px-6">
          <div className="flex h-24 h-full items-center justify-between lg:flex-col">
            <div
              className={`sb-none h-screen w-full overflow-y-scroll pt-20 px-4 pb-12 max-lg:invisible max-lg:absolute max-lg:right-0 max-lg:bottom-0 max-lg:z-50 max-lg:bg-black/90 ${isOpenMenu ? "max-lg:visible max-lg:bg-black/90 max-lg:opacity-100" : "max-lg:invisible max-lg:opacity-0"} `}
            >
              <ul className="font-medium max-lg:text-white">
                <li>
                  <a
                    className="block py-3 max-lg:border-b lg:inline-block"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="block py-3 max-lg:border-b lg:inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:info@nftcard-deck.com"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="block py-3 max-lg:border-b lg:inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://scan.diver.io"
                  >
                    DIVER Scan
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-full max-lg:gap-2 lg:flex-col">
              <button
                onClick={notify}
                className="rounded-lg bg-blue-600 p-3 text-[16px] text-white max-lg:aspect-square max-lg:w-10 lg:mb-5 lg:py-2 lg:px-4"
              >
                <span className="max-lg:hidden">URLをコピー</span>
                <div className="w-full lg:hidden">
                  <img
                    src="/assets/images/ic-copy.svg"
                    className="w-full"
                    alt=""
                  />
                </div>
              </button>
              <button
                onClick={() => setIsOpenAddress(true)}
                className="rounded-lg bg-blue-600 py-2 px-2 text-[16px] text-white max-lg:flex-1 lg:mb-5 lg:px-4"
              >
                アドレスを入力
              </button>
              <button
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="relative z-50 aspect-square w-10 rounded-lg bg-blue-600 p-3 text-[16px] text-white lg:absolute lg:top-4 lg:right-4"
              >
                <div>
                  <img
                    src={`${isOpenMenu ? "/assets/images/ic-close-wh.svg" : "/assets/images/ic-menu.svg"}`}
                    className={`${isOpenMenu ? "mx-auto max-h-4" : ""}`}
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={isOpenNote}
        onClose={() => setIsOpenNote(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/50 p-4">
          <DialogPanel className="relative max-h-[90%] w-full max-w-md overflow-hidden rounded-lg bg-white p-4">
            <DialogTitle className="justify-betweentext-[16px] mb-5 flex items-center font-bold">
              <span>現在のメモ</span>
              <button
                type="button"
                className="absolute top-3.5 right-3.5 inline-flex cursor-pointer items-center justify-center rounded-full p-1 focus:outline-none"
                onClick={() => setIsOpenNote(false)}
              >
                <img src="/assets/images/ic-close.svg" className="w-4" alt="" />
              </button>
            </DialogTitle>
            <Description>
              <div>
                <div className="mb-5 min-h-[200px] rounded-md bg-gray-50 p-3">
                  現在のメモはありません
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpenNote(false)}
                    className="inline-flex rounded-lg bg-blue-600 py-2 px-4 text-[14px] text-white"
                  >
                    メモを入力
                  </button>
                </div>
              </div>
            </Description>
          </DialogPanel>
        </div>
      </Dialog>
      <Dialog
        open={isOpenAddress}
        onClose={() => setIsOpenAddress(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/50 p-4">
          <DialogPanel className="relative max-h-[90%] w-full max-w-md overflow-hidden rounded-lg bg-white p-4">
            <DialogTitle className="justify-betweentext-[16px] flex items-center font-bold">
              <span>アドレス入力</span>
              <button
                type="button"
                className="absolute top-3.5 right-3.5 inline-flex cursor-pointer items-center justify-center rounded-full p-1 focus:outline-none"
                onClick={() => setIsOpenAddress(false)}
              >
                <img src="/assets/images/ic-close.svg" className="w-4" alt="" />
              </button>
            </DialogTitle>
            <p className="mb-5">ダイバーウォレットアドレスを入力ください。</p>
            <Description>
              <div>
                <div className="mb-5">
                  <input
                    className="w-full rounded-lg border border-black p-2 text-[16px]"
                    placeholder="ex. 0x~"
                    type="text"
                    value=""
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpenAddress(false)}
                    className="inline-flex rounded-lg bg-blue-600 py-2 px-4 text-[14px] text-white"
                  >
                    NFTを確認する
                  </button>
                </div>
              </div>
            </Description>
          </DialogPanel>
        </div>
      </Dialog>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
