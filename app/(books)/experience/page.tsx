import { experience } from "@/data/experience";

export default function ExperiencePage() {
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
            Experience
          </h1>

            <ol className="space-y-8 font-serif text-gray-800">
              {experience.map((job) => (
                <li key={job.company}>
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg">{job.company}</span>
                    <span className="text-m"> – {job.position}</span>
                    <span className="flex-1 border-b border-dotted mx-2 mb-1"></span>
                    <span>{job.dates}</span>
                  </div>

                  {/* Location */}
                  {job.location && (
                    <div className="text-sm text-gray-500 mt-1">{job.location}</div>
                  )}

                  {/* Bullets */}
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
        </div>
      </div>
    </main>
  );
}