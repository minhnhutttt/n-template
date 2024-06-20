import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ReactNode, useState } from "react";

export type DialogSliderType = {
  image: string;
  children: ReactNode;
};

export default function DialogSlider({ image, children }: DialogSliderType) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="block cursor-pointer text-center text-[16px] font-bold"
      >
        {children}
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/50 p-4">
          <DialogPanel className="max-h-[90%] max-w-md overflow-hidden rounded-lg bg-white">
            <DialogTitle className="relative flex items-center justify-between p-4 text-[16px] font-bold">
              <span>詳細情報</span>
              <button
                type="button"
                className="absolute top-3.5 right-3.5 inline-flex cursor-pointer items-center justify-center rounded-full p-1 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <img src="/assets/images/ic-close.svg" className="w-4" alt="" />
              </button>
            </DialogTitle>
            <Description>
              <figure className="h-[300px]">
                <img className="size-full object-cover" src={image} alt="" />
              </figure>
            </Description>
            <div className="h-[340px] w-full overflow-y-scroll rounded">
              <div className="min-w-full">
                <div className="p-4 text-[16px]">
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">名称</div>
                      <div className="w-full break-words pl-2 break-all">
                        5%offチケット
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">タイプ</div>
                      <div className="w-full break-words pl-2 break-all">
                        img
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">metadata.version</div>
                      <div className="w-full break-words pl-2 break-all">
                        v1.1.0
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">metadata.isencrypted</div>
                      <div className="w-full break-words pl-2 break-all">
                        false
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">説明</div>
                      <div className="w-full break-words pl-2 break-all">
                        Test
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">metadata.type</div>
                      <div className="w-full break-words pl-2 break-all">
                        img
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">metadata.project</div>
                      <div className="w-full break-words pl-2 break-all">
                        DIVER TRACOU
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        Properties
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.0.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        social_media
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.0.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        xxxx.xxx
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.0.action
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        url
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.0.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.1.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        website
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.1.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        xxxx.xxx
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.1.action
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        url
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.1.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.2.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        phone
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.2.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        03-1234-5678
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.2.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.3.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        storeName
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.3.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        〇〇ショップ
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.3.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.4.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        remarks
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.4.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        トレード可能です。
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.4.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.5.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        quantity
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.5.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        100
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.5.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.6.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        rules
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.6.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        お会計時にご提示ください
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.6.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.7.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        spot
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.7.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        東京都品川区〇〇
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.7.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.8.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        details
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.8.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        Test
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.8.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.9.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        name
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.9.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        5%offチケット
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.9.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.10.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        startDate
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.10.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        1713884400
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.10.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        date
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.11.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        endDate
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.11.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        1717167599
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.0.elements.11.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        date
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.1.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        Private
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.1.elements.0.title
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        companyNameHash
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.1.elements.0.content
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        0xcb16db4f9bf20f6da33ca49949aaa0ffbc988a0bb8d7c6daf9801c04ee0710b8
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">
                        metadata.sections.1.elements.0.type
                      </div>
                      <div className="w-full break-words pl-2 break-all">
                        string
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 border-b pb-3">
                      <div className="font-medium">数量</div>
                      <div className="w-full break-words pl-2 break-all">
                        100
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
