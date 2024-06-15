import { buttonVariants } from "@/lib/variants/buttonVariants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-red-400 p-24">
      <div className="mx-auto h-[1000px] w-[1000px] bg-blue-800">
        <button className={buttonVariants({ type: "primary", full: true })}>
          キャンセル
        </button>
      </div>
    </main>
  );
}
