"use client";
import Title from "@/components/Title";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const data = [
    {
        image: '/assets/images/slider-01.png',
        text: 'ライブ配信の世界大会において2位、4位のライバーを輩出。',
    },
    {
        image: '/assets/images/slider-02.png',
        text: '国内17ライバー月間TOP100に7名ランクイン。',
    },
    {
        image: '/assets/images/slider-03.png',
        text: '毎月数名が常にイベントTOP10にランクイン。',
    },
    {
        image: '/assets/images/slider-04.png',
        text: '新人イベントにて上位20位以内に6名がランクイン。更に、１位も所属ライバー。',
    }
]

const Slider = () => {
  const ref = useScrollAnimations(); 
    return (
      <div ref={ref} className="md:pt-14 pt-10 relative overflow-hidden">
        <div className="md:mt-12 px-5 mt-8">
          <Title>育成したライバーの実績</Title>
        </div>
        <div className="fade-up mt-6 relative overflow-hidden">
            <Swiper
            slidesPerView={'auto'}
            loop={true}
            centeredSlides={true}
            className="mySwiper"
        >
            {data.map((item, index) => (
                <SwiperSlide key={index} className="w-full md:max-w-[450px] max-w-[320px] mx-2">
                    <div className="md:rounded-[60px] rounded-[32px] overflow-hidden bg-[#F2F2FF]">
                        <figure>
                            <img src={item.image} alt="" />
                        </figure>
                        <p className="md:text-[20px] text-[15px] md:h-[170px] h-[120px] md:pt-10 pt-6 md:px-7 px-4">
                            {item.text}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
            
            </Swiper>
            <div className="relative md:-mt-[76px] -mt-[46px] z-10">
                <figure className="pl-4">
                    <img className="max-md:w-[220px]" src="/assets/images/support.png" alt="" />
                </figure>
                <p className="w-[325px] mx-auto md:text-[18px] text-[15px] md:-mt-6 -mt-3">
                多数のＴＯＰライバーを輩出しており、長年培った知識とデータでライバーさんの活動をサポート致します。
                </p>
            </div>
        </div>
      </div>
    );
  };
  
  export default Slider;
  