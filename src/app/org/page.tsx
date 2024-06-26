"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef, useState } from "react";
import DialogSlider from "./../components/DialogSlider";
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
        メタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータ
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        メタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータ
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        メタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータ
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        メタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータ
      </>
    ),
  },
  {
    image: "/assets/images/img.png",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        メタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータ
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        メタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータ
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        メタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータ
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "タイトル",
    id: "トークンID",
    text: (
      <>
        メタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータメタデータ
      </>
    ),
  },
];

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return  <button
  onClick={() => swiper.slidePrev()}
 className="absolute z-50 bottom-40 left-5 md:left-[calc(50%-320px)] flex size-12 cursor-pointer items-center justify-center rounded-lg border border-[#999] bg-white md:bottom-32 md:size-[80px]"
>
 <img className="max-md:w-4" src="/assets/images/arrow_prev.png" />
</button>;
};
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return   <button
  onClick={() => swiper.slideNext()}
  className="absolute z-50 max-md:right-5 md:left-[calc(50%+240px)] bottom-40 flex size-12 cursor-pointer items-center justify-center rounded-lg border border-[#999] bg-white md:bottom-32 md:size-[80px]"
>
  <img className="max-md:w-4" src="/assets/images/arrow_next.png" />
</button>
};
export default function Home() {
  let [isOpenNote, setIsOpenNote] = useState(false);
  let [isOpenAddress, setIsOpenAddress] = useState(false);
  let [isOpenMenu, setIsOpenMenu] = useState(false);
  const notify = () => toast(<><span className="text-[15px] font-bold">コピー完了</span><br /> 現在のURLをコピーしました</>);

  return (
    <>
    <header className="z-40 flex items-center py-5 h-20 px-3">
      <div className="flex w-full">
        <div className="flex items-center pr-4 pl-4 md:pr-10">
          <a
            href="/"
            className=" block duration-150 hover:opacity-75"
          >
            <img className="w-[240px]" src="/assets/images/logo-bk.svg" alt="" />
          </a>
        </div>
      </div>
    </header>
    <main>
      <p className="p-5 text-center">Deck ID : 0x.....</p>
      <div className="overflow-hidden">
        <div className="">
        <Swiper
        scrollbar={{
          draggable: true,
          dragSize: 200,
        }}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={10}
        modules={[Scrollbar]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
              <div
                key={index}
                className="overflow-hidden px-1 md:px-3"
              >
                <figure className="max-md:h-[340px] md:h-[calc(45vh)]">
                  <img
                    className="size-full object-cover"
                    src={item.image}
                    alt=""
                  />
                </figure>
                <div className="inner py-[4vh] md:h-[calc(30vh)]">
                  <p className="text-center text-[18px] font-bold">
                    {item.title}
                  </p>
                  <p className="mt-2 text-center text-[16px] md:text-[3vmin]">{item.id}</p>
                  <p className="mt-[2vmin] mb-4 text-center md:text-[2vmin]">
                    {item.text}
                  </p>
                  <div className="flex justify-center overflow-hidden">
                    <DialogSlider image={item.image}>
                    <span
                        className="block cursor-pointer text-center text-[16px] font-bold"
                      >
                        Infromation
                      </span>
                    </DialogSlider>
                  </div>
                </div>
              </div>
              </SwiperSlide>
            ))}
          <SwiperButtonNext />
          <SwiperButtonPrev />
      </Swiper>
        </div>
      </div>
      
      <div onClick={() => setIsOpenMenu(!isOpenMenu)} className="bg-white fixed bottom-0 right-0 z-50 lg:w-[60px] lg:h-screen cursor-pointer hover:bg-gray-200 max-lg:hidden">
        <div className="h-full p-4 flex justify-center items-center">
          <div className="text-[12px] font-bold h-24"><img src="/assets/images/ic-arrow-square.svg" className="w-full" alt="" />menu</div>
          </div>
        </div>
      <div className={`fixed right-0 bottom-0 z-50 w-full max-lg:h-20 max-lg:backdrop-blur-2xl  lg:h-screen lg:w-[400px] lg:bg-gray-100  ${isOpenMenu ? "lg:visible lg:opacity-100" : "lg:invisible lg:opacity-0"}`}>
        <div className="h-full px-4 lg:px-6">
          <div className="flex h-24 h-full items-center justify-between lg:flex-col">
            <div
              className={`sb-none h-screen w-full overflow-y-scroll max-lg:bg-black/90 pt-20 px-4 pb-12 max-lg:invisible max-lg:absolute max-lg:right-0 max-lg:bottom-0 max-lg:z-50 ${isOpenMenu ? "max-lg:visible max-lg:bg-black/90 max-lg:opacity-100" : "max-lg:invisible  max-lg:opacity-0"} `}
            >
              <ul className="font-medium max-lg:text-white">
                <li>
                  <a
                    className="block py-3 max-lg:border-b lg:inline-block"
                    href="/"
                  >
                    クリア
                  </a>
                </li>
                <li>
                  <a
                    className="block py-3 max-lg:border-b lg:inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.apple.com/jp/app/diverwallet/id6444421722"
                  >
                    DIVER Wallet(iOS)
                  </a>
                </li>
                <li>
                  <a
                    className="block py-3 max-lg:border-b lg:inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&amp;pli=1"
                  >
                    DIVER Wallet(Android)
                  </a>
                </li>
                <li>
                  <a
                    className="block py-3 max-lg:border-b lg:inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://chromewebstore.google.com/detail/diver-wallet/pdlocjdlejekdbpghdcmedeacpkfiiof?hl=ja"
                  >
                    DIVER Wallet(Chrome)
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
                onClick={() => setIsOpenNote(true)}
                className="rounded-lg bg-blue-600 p-3 text-[16px] text-white max-lg:aspect-square max-lg:w-10 lg:mb-5 lg:py-2 lg:px-4"
              >
                <span className="max-lg:hidden">メモ</span>
                <div className="w-full lg:hidden">
                  <img
                    src="/assets/images/ic-note.svg"
                    className="w-full"
                    alt=""
                  />
                </div>
              </button>
              <button  onClick={notify} className="rounded-lg bg-blue-600 p-3 text-[16px] text-white max-lg:aspect-square max-lg:w-10 lg:mb-5 lg:py-2 lg:px-4">
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
                デッキ検索
              </button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white p-3 text-center text-[16px] text-white max-lg:aspect-square max-lg:w-10 lg:mb-5 lg:bg-blue-600 lg:py-2 lg:px-4"
                href="https://diverwallet.page.link/X1xD"
              >
                <span className="max-lg:hidden">アプリを開く</span>
                <div className="flex h-full w-full items-center justify-center lg:hidden">
                  <img
                    src="/assets/images/ic-wallet.svg"
                    className="max-h-[16px] w-4"
                    alt=""
                  />
                </div>
              </a>
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
    </>
  );
}
