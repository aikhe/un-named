import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <>
      <header className="h-14 border-dashed border-b-2 border-black/30">
        <div className="mx-14 px-6 max-w-[50rem] h-full w-full border-dashed border-x-2 border-black/30"></div>
      </header>
      <section className="w-full flex">
        <div className="font-dmsans h-60 mx-14 p-6 border-dashed border-black/30 border-x-2 flex flex-col gap-3 tracking-tight max-w-[50rem]">
          <h1 className="leading-none text-4xl font-black">Un-named</h1>
          <p className="text-xl leading-6 opacity-85">
            Im doing it and I'll finish this by the{" "}
            <strong>end of this month</strong>, I've been slacking off this past
            few weeks to the fullest and leaving this project untouched for
            days.
            <strong> I'll lock in this time</strong> and trust me this is gonna
            be done within this month. Nothing too exagerated, just really need
            this to remind myself and get doing.
          </p>
          <Link
            className={`${buttonVariants({ variant: "default", size: "sm" })} max-w-fit`}
            href={"/sign-up"}
          >
            Get Started <ArrowRight />
          </Link>
        </div>
      </section>
      <footer className="h-[calc(100vh-15rem-60px)] border-dashed border-t-2 border-black/30">
        <div className="mx-14 px-6 max-w-[50rem] h-full w-full border-dashed border-x-2 border-black/30"></div>
      </footer>
    </>
  );
}
