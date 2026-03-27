// app/projects/[slug]/page.tsx
import Link from "next/link";
import { misc } from "@/data/misc";
import Image from "next/image";

export default async function SubjPage({ params }: any) {
  const { slug } = await params;

  const subj = misc.find(p => p.slug === slug);

  if (!subj) return <div>Project not found</div>;

  return (
    <main className="min-h-screen bg-[#fdfaf6] px-6 py-16 relative">

      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none" />
      {/* Page edge */}
      <div className="absolute right-0 top-0 h-full w-[15px] bg-gradient-to-l from-[#e8dfd3] to-transparent" />
      
      {/* BACK BUTTON */}
      <Link
        href="/misc"
        className="fixed bottom-10 left-10 font-serif text-sm text-gray-700 hover:text-black"
      >
        ← Back to misc.
      </Link>

      {/* PAGE CONTENT */}
      <div className="max-w-2xl mx-auto relative">
        <div className="px-6 py-10">

          {/* Chapter label */}
          <p className="text-sm font-serif text-gray-500 mb-2">
            Chapter {misc.indexOf(subj) + 1}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-serif text-gray-900 mb-6 leading-snug">
            {subj.title}
          </h1>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-gray-400 mb-8" />

          {/* Body text */}
          <p className="font-serif text-lg text-gray-800 leading-relaxed mb-8">
            {subj.description}
          </p>
            {subj.images && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-10">
                {subj.images.map((img, i) => (
                <div key={i} className="relative w-full aspect-square overflow-hidden">
                    <Image
                    src={img}
                    alt={`${subj.title} ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition"
                    />
                </div>
                ))}
            </div>
            )}
            {subj.instagram && (
                <div className="mt-6 text-center">
                    <a
                    href={subj.instagram}
                    target="_blank"
                    className="font-serif text-sm text-gray-700 hover:text-black hover:underline"
                    >
                    View full collection →
                    </a>
                </div>
                )}
        </div>
      </div>

    </main>
  );
}