import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf6] px-6 py-6 relative">

      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto px-6 py-10">
          
          <h1 className="text-3xl font-serif text-center mb-10 text-gray-900">
            Education
          </h1>

            <ol className="space-y-8 font-serif text-gray-800">
            {education.map((edu, i) => (
                <li key={edu.school}>
                <div className="flex justify-between items-baseline">
                    <span className="text-lg">{edu.school}</span>
                    <span className="flex-1 border-b border-dotted mx-2 mb-1"></span>
                    <span className="text-sm">{edu.dates}</span>
                </div>
                {/* <span className="text-m">{edu.program}</span> */}
                <p className="text-gray-700 mt-1">{edu.description}</p>
                </li>
            ))}
            </ol>
        </div>
      </div>
    </main>
  );
}