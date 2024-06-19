"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    image: "/assets/images/sauri_009.jpg",
    title: "イベント運営会社",
    text: (
      <>
        フェスをデジタルでさらに楽しむ！
        <br />
        NFTクーポンでフェスティバルの特典や限定アイテムを提供！
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "イベント運営会社",
    text: (
      <>
        フェスをデジタルでさらに楽しむ！
        <br />
        NFTクーポンでフェスティバルの特典や限定アイテムを提供！
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "イベント運営会社",
    text: (
      <>
        フェスをデジタルでさらに楽しむ！
        <br />
        NFTクーポンでフェスティバルの特典や限定アイテムを提供！
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "イベント運営会社",
    text: (
      <>
        フェスをデジタルでさらに楽しむ！
        <br />
        NFTクーポンでフェスティバルの特典や限定アイテムを提供！
      </>
    ),
  },
  {
    image: "/assets/images/sauri_009.jpg",
    title: "イベント運営会社",
    text: (
      <>
        フェスをデジタルでさらに楽しむ！
        <br />
        NFTクーポンでフェスティバルの特典や限定アイテムを提供！
      </>
    ),
  },
];
export default function Home() {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    variableWidth: true,
  };
  return (
    <main className="">
      <p className="p-5 text-center">Deck ID : 0x.....</p>
      <div className="js-slider overflow-hidden">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="px-3">
              <figure className="h-[500px]">
                <img
                  className="size-full object-cover"
                  src={item.image}
                  alt=""
                />
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
}
