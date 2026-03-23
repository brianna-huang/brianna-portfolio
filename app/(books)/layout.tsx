// app/(books)/layout.tsx
import BooksMenu from "@/components/BooksMenu";

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#fdfaf6] px-6 py-12 relative font-serif text-gray-900">

      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-50 mix-blend-multiply pointer-events-none -z-10" />

      {/* Top menu */}
      <div className="mb-8 flex justify-start">
        <BooksMenu />
      </div>

      {/* Page content */}
      <div className="max-w-3xl mx-auto relative">
        {children}
      </div>
    </main>
  );
}