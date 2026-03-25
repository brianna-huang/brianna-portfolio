// app/projects/[slug]/page.tsx
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;

  const project = projects.find(p => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  // get next project for page turning function
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[currentIndex + 1];

  return (
    <main className="min-h-screen bg-[#fdfaf6] px-6 py-16 relative">

      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none" />
      {/* Page edge */}
      <div className="absolute right-0 top-0 h-full w-[15px] bg-gradient-to-l from-[#e8dfd3] to-transparent" />
      
      {/* BACK BUTTON */}
      <Link
        href="/projects"
        className="fixed bottom-10 left-10 font-serif text-sm text-gray-700 hover:text-black"
      >
        ← Back to projects
      </Link>

      {/* NEXT BUTTON */}
      {nextProject && (
        <Link
            href={`/projects/${nextProject.slug}`}
            className="fixed bottom-10 right-10 font-serif text-sm text-gray-700 hover:text-black"
        >
            Next chapter →
        </Link>
        )}

      {/* PAGE CONTENT */}
      <div className="max-w-2xl mx-auto relative">
        <div className="px-6 py-10">

          {/* Chapter label */}
          <p className="text-sm font-serif text-gray-500 mb-2">
            Chapter {projects.indexOf(project) + 1}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-serif text-gray-900 mb-6 leading-snug">
            {project.title}
          </h1>

          {/* Divider (like a book) */}
          <div className="w-16 h-[1px] bg-gray-400 mb-8" />

          {/* Body text */}
          <p className="font-serif text-lg text-gray-800 leading-relaxed mb-8">
            {project.description}
          </p>

          {project.tags && (
              <div className="mb-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-serif px-2 py-1 border border-gray-300 rounded-sm text-gray-700 bg-[#f5efe6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

          {project.image && (
            <div className="my-8">
                <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-auto rounded-md"
                />

                {/* Caption */}
                {project.image_desc && (
                  <p className="mt-2 text-sm font-serif text-gray-600 italic text-center">
                    {project.image_desc}
                  </p>
                )}
            </div>
            )}

          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            className="font-serif text-blue-700 hover:underline"
          >
            View on GitHub →
          </a>

        </div>
      </div>

    </main>
  );
}