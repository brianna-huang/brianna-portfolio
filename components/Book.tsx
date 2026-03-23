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
        <span className="absolute inset-0 flex items-center justify-center text-xl font-serif tracking-wide text-gray-800">
  {title}
</span>
      </div>
    </Link>
  );
}