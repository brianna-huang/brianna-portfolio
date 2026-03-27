"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { LibraryBig } from "lucide-react";

export default function BooksMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu if click is outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const books = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Experience", href: "/experience" },
    { title: "Education", href: "/education" },
    { title: "More", href: "/misc" },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center gap-2 p-2 text-gray-800 hover:text-black"
        onClick={() => setOpen(!open)}
      >
        <LibraryBig size={24} />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-50">
          {books.map((book) => (
            <Link
              key={book.href}
              href={book.href}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)} // Close menu when clicking an option
            >
              {book.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}