// components/Book.tsx
import Link from "next/link";
import Image from "next/image";

export default function Book({
  href,
  image,
  title,
}: {
  href: string;
  image: string;
  title: string;
}) {
  return (
    <Link href={href}>
      <div className="relative w-72 h-20 cursor-pointer transition transform hover:translate-x-2 ">
        <Image
          src={image}
          alt={title}
          fill
          sizes="300px"
          className="object-contain"
        />
        
        {/* Title overlay */}
        <span
          className={`absolute inset-0 flex items-center justify-center text-xl tracking-wide text-[#2f2520]`}
          style={{
            textShadow: `
              0 1px 0 rgba(255,255,255,0.25),
              0 -1px 1px rgba(0,0,0,0.25)
            `,
            opacity: 0.9
          }}
        >
          {title}
        </span>
      </div>
    </Link>
  );
}