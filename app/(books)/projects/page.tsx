// app/projects/page.tsx
import Link from "next/link";
import { projects } from "@/data/projects";;

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf6] px-6 py-6 relative">

      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none" />
      {/* Page edge */}
      <div className="absolute right-0 top-0 h-full w-[15px] bg-gradient-to-l from-[#e8dfd3] to-transparent" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto px-6 py-10">
          
          <h1 className="text-3xl font-serif text-center mb-10 text-gray-900">
            Projects
          </h1>

          <ol className="space-y-4 font-serif text-lg text-gray-800 pl-4">
            {projects.map((project, i) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-baseline"
                >
                  <span className="whitespace-nowrap group-hover:underline">
                    {project.title}
                  </span>

                  <span className="flex-1 border-b border-dotted mx-2 mb-1"></span>

                  <span>{i + 1}</span>
                </Link>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </main>
  );
}