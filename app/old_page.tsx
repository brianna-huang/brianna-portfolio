import { Github, Linkedin, ArrowDownToLine } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="px-6 py-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <header className="mb-6 pb-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold">Brianna Huang</h1>
            <div className="flex gap-4">
              <a href="https://github.com/brianna-huang" target="_blank">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/brianna-huang" target="_blank">
                <Linkedin size={20} />
              </a>
              <a href="/BH_resume.pdf" download>
                <ArrowDownToLine size={20}/>
              </a>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            I'm a software engineer passionate about exploring the crossroads of computer science and medicine, and to develop data-driven ways to solve healthcare problems using AI.
          </p>

          
        </header>

        {/* EXPERIENCE */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>

          <div className="mb-6">
            <h3 className="font-medium">Genentech — Software Engineering Intern</h3>
            <p className="text-sm text-gray-500">January – July 2024</p>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Built internal tools for scientific data visualization and analysis</li>
              <li>Worked with Django, GraphQL, and Postgres in a legacy system</li>
              <li>Collaborated with chemists to integrate with domain-specific workflows</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-medium">Optum — Data Science Intern</h3>
            <p className="text-sm text-gray-500">June – August 2023</p>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Processed large-scale healthcare transaction data</li>
              <li>Built machine learning models to standardize insurance data formats</li>
              <li>Led experimentation to evaluate multiple modeling approaches</li>
            </ul>
          </div>

          <div> 
            <h3 className="font-medium">Boston University Brain Health Research Lab — Research Programmer</h3>
            <p className="text-sm text-gray-500">May 2021 – August 2022</p>
            <ul className="list-disc ml-5 text-gray-700 mt-2">
              <li>Built Python pipelines to process and automatically score raw digital pen-based neuropsychological test data</li>
              <li>Helped identify early cognitive impairment patterns in test data</li>
            </ul>
          </div>

        </section>

        {/* PROJECTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Project Cards */}

            {/* BRATS APP */}
            <div className="border rounded-xl p-4 hover:shadow-md transition">
              <Image
                src="/brats-demo.png"
                alt="Brain App"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <h3 className="font-medium text-lg">Brain Tumor Segmentation App</h3>
              <p className="text-gray-700 text-sm mt-1">
                Web app to visualize tumor segmentations on MRI scans using deep learning models.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">PyTorch</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Flask</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Medical Imaging</span>
              </div>
              <a
                href="https://github.com/brianna-huang/brats-app"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View on GitHub →
              </a>
            </div>

            {/* MEDICAL IMAGING */}
            <div className="border rounded-xl p-4 hover:shadow-md transition">
              <Image
                src="/medical-imaging-demo.png"
                alt="Medical Imaging"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <h3 className="font-medium text-lg">Medical Imaging Analysis with Deep Learning</h3>
              <p className="text-gray-700 text-sm mt-1">
                Using AI tools for segmentation, anomaly detection, and reconstruction of medical images.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Deep Learning</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Computer Vision</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">pydicom</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">SimpleITK</span>
              </div>
              <a
                href="https://github.com/brianna-huang/medical-imaging"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View on GitHub →
              </a>
            </div>

            {/* MOVIE CHAIN GAME */}
            <div className="border rounded-xl p-4 hover:shadow-md transition">
              <Image
                src="/movie-game-demo.png"
                alt="Movie Game"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <h3 className="font-medium text-lg">Movie Chain Game</h3>
              <p className="text-gray-700 text-sm mt-1">
                Movie-themed chain game supported by movie & IMDB databases
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">SQL</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Auth0</span>
              </div>
              <a
                href="https://github.com/brianna-huang/syntax-terror"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View on GitHub →
              </a>
            </div>

            {/* AI Fundamentals */}
            <div className="border rounded-xl p-4 hover:shadow-md transition">
              <Image
                src="/sudoku-demo.png"
                alt="AI fundamentals"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <h3 className="font-medium text-lg">AI Fundamentals</h3>
              <p className="text-gray-700 text-sm mt-1">
                AI projects covering search algorithms, RL, constraint satisfaction, language models, and neural networks.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Game playing</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">MDPs</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Neural networks</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">NLP</span>
              </div>
              <a
                href="https://github.com/brianna-huang/ai-fundamentals"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View on GitHub →
              </a>
            </div>

            {/* HOUSING PROJECT */}
            <div className="border rounded-xl p-4 hover:shadow-md transition">
              <Image
                src="/housing-demo.png"
                alt="Bay Area Housing Project"
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
              <h3 className="font-medium text-lg">Bay Area Housing Project</h3>
              <p className="text-gray-700 text-sm mt-1">
                Using big data to investigate factors affecting high housing prices in the Bay Area.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Numpy</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Pandas</span>
              </div>
              <a
                href="https://github.com/brianna-huang/bay-area-housing/"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                View on GitHub →
              </a>
            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>

          <div className="mb-4">
            <h3 className="font-medium">
              University of Pennsylvania — MSE in Data Science
            </h3>
            <p className="text-sm text-gray-500">January 2024 – August 2025</p>
            <p className="text-gray-700 text-sm mt-1">
              Focus on AI and medical imaging
            </p>
          </div>

          <div>
            <h3 className="font-medium">
              Boston University — BA in Computer Science & Neuroscience
            </h3>
            <p className="text-sm text-gray-500">September 2020 – December 2023</p>
            <p className="text-gray-700 text-sm mt-1">
              Focus on computational neuroscience
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}