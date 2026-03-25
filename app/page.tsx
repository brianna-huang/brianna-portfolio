// app/page.tsx
import Book from "@/components/Book";
import Image from "next/image";
import { Github, Linkedin, ArrowDownToLine } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfaf6] px-6 py-6 relative text-gray-900 font-serif">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none" />
      <div className="max-w-6xl mx-auto">

        {/* TOP: Frame + Intro */}
        <section className="relative mb-16">

          {/* CENTERED CONTENT */}
          <div className="flex items-center justify-center gap-4 pt-6 pb-12 max-w-4xl mx-auto">

            {/* FRAME */}
            <div className="relative w-60 h-70 rotate-[-4deg] drop-shadow-[0_8px_10px_rgba(0,0,0,0.15)]">
              <Image
                src="/me.png"
                alt="me"
                fill
                className="object-cover p-3"
              />
            </div>

            {/* NAME & INTRO */}
            <div className="max-w-lg">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-semibold">
                  Brianna Huang
                </h1>

                {/* ICONS */}
                <div className="flex gap-3 text-gray-500">
                  <a href="https://github.com/brianna-huang" target="_blank" className="hover:text-black transition">
                    <Github size={18} />
                  </a>
                  <a href="https://linkedin.com/in/brianna-huang" target="_blank" className="hover:text-black transition">
                    <Linkedin size={18} />
                  </a>
                  <a href="/BH_resume.pdf" download className="hover:text-black transition">
                    <ArrowDownToLine size={18}/>
                  </a>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-gray-700">
                I'm a software engineer passionate about exploring the crossroads
                of computer science and medicine, and developing data-driven ways
                to solve healthcare problems using AI.
              </p>
            </div>

          </div>
        </section>

        <section className="relative mt-18 mb-24 h-[200px]">

          {/* DESK */}
          <Image
            src="/desk.png"
            alt="desk"
            width={1200}
            height={200}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-auto scale-y-65 drop-shadow-[0_6px_10px_rgba(0,0,0,0.15)]"
          />

          {/* BOOK STACK */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[80px] w-[320px] drop-shadow-[0_8px_10px_rgba(0,0,0,0.1)]">
            {/* <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-[260px] h-[10px] bg-black/15 blur-md rounded-full" /> */}
            {/* Books */}
            <div className="absolute bottom-[178px] z-40 translate-x-2">
              <Book href="/projects" image="/blue-book.png" title="Projects" />
            </div>

            <div className="absolute bottom-[120px] z-30 -translate-x-1">
              <Book href="/experience" image="/pink-book.png" title="Experience" />
            </div>

            <div className="absolute bottom-[63px] z-20 translate-x-3" >
              <Book href="/education" image="/purple-book.png" title="Education" />
            </div>

            <div className="absolute bottom-[0px] z-10 translate-x-2">
              <Book href="/misc" image="/green-book.png" title="Misc" />
            </div>

            {/* PLANT (anchored to stack) */}
            <Image
              src="/plant.png"
              alt="plant"
              width={180}
              height={220}
              className="absolute right-full mr-[-16px] bottom-1 rotate-[-2deg]"
            />

            {/* MUG (anchored to stack) */}
            <Image
              src="/mug.png"
              alt="mug"
              width={180}
              height={220}
              className="absolute left-full ml-[-25px] bottom-0"
            />

          </div>

        </section>

      </div>
    </main>
  );
}