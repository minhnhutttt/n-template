"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import type { FaqItemPropsType } from "./faqItem";
import FaqItem from "./faqItem";
import Title from "@/components/Title";
const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "ライブ配信未経験なのですが…",
    answer: (
      <>
        ご安心ください。所属ライバーの99％が未経験でスタートしております。また、輩出したTOPライバーさん達もほぼ全員が未経験からのスタートでした。
      </>
    ),
  },
  {
    id: "2",
    question: "芸能人でもインフルエンサーでもないし、特技も何も無いごく普通の一般人だけど大丈夫？",
    answer: (
      <>
        ご安心ください。所属ライバーの99％が未経験でスタートしております。また、輩出したTOPライバーさん達もほぼ全員が未経験からのスタートでした。
      </>
    ),
  },
  {
    id: "3",
    question: "所属したり、教えてもらったりするのにお金はかかりますか？",
    answer: (
      <>
        ご安心ください。所属ライバーの99％が未経験でスタートしております。また、輩出したTOPライバーさん達もほぼ全員が未経験からのスタートでした。
      </>
    ),
  },
  {
    id: "4",
    question: "ノルマはありますか？",
    answer: (
      <>
        ご安心ください。所属ライバーの99％が未経験でスタートしております。また、輩出したTOPライバーさん達もほぼ全員が未経験からのスタートでした。
      </>
    ),
  },
  {
    id: "5",
    question: "顔出しは必須ですか？",
    answer: (
      <>
        ご安心ください。所属ライバーの99％が未経験でスタートしております。また、輩出したTOPライバーさん達もほぼ全員が未経験からのスタートでした。
      </>
    ),
  },
];

export default function FAQ() {
  const ref = useScrollAnimations();

  return (
    <div
      ref={ref}
      id="faq"
      className="px-5 pb-12 pt-14 mb-[30px] md:mb-[70px] md:pb-[55px] md:pt-[120px]"
    >
      <div className="mx-auto w-full max-w-[920px]">
        <div className="px-5">
            <Title>よくある質問</Title>
          </div>
        <div className="mx-auto mt-8 w-full space-y-[20px] md:mt-[40px] md:space-y-[30px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
