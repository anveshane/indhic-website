import Image from "next/image";
import logoImg from '../../public/logo.png'

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="bg-indigo-400 text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Image
            src={logoImg}
            alt="Indhic Software Logo"
            width={150}
            height={150}
            className="mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold lobster-regular">Indhic Software</h1>
            <p className="text-xl">Augmenting Intelligence with AI Consulting</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            At Indhic Software Private Limited, we specialize in augmenting intelligence to various client products and platforms using our specialized AI consulting offerings. With decades of experience in large MNCs and startups across diverse verticals, we build robust and reliable AI-based workflows and pipelines.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
            <li>Automatic Prompt engineering and optimization</li>
            <li>Search and recommender systems</li>
            <li>NLP and data engineering pipelines</li>
            <li>LLM-based application development</li>
            <li>Agentic workflows and RAG integration</li>
            <li>ML and LLM operations</li>
            <li>Fractional CTO, Backend and scalable system architecture advisory</li>
            <li>Generative AI training</li>
            <li>ASR/STT/TTS and voice agent pipelines</li>
            <li>Accessibility Testing and Implementation</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="mb-4">
            We evaluate and experiment with various frameworks to orchestrate the best suitable workflows for our clients' problem statements. Our approach covers:
          </p>
          <ul className="list-disc list-inside">
            <li>Application View: Conversational, Non-conversational, and Agentic Systems</li>
            <li>Personal View: Co-pilots for various user types</li>
            <li>Scaling View: From MVP to Pilot to Scaling</li>
            <li>LLM SDLC View: Comprehensive development lifecycle management and architecture advisory and guidance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email: <a href="mailto:indhicltd@gmail.com" className="text-indigo-600 hover:underline">indhicltd@gmail.com</a></p>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Indhic Software Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
