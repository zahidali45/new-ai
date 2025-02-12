import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive online store with advanced filtering and search capabilities",
    image: "/shahid.JPG", // Corrected path
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media management",
    image: "/umair.JPG", // Corrected path (or /placeholders.JPG if you have a different image)
  },
  {
    title: "AI-powered Chatbot",
    description: "Intelligent customer service chatbot with natural language processing",
    image: "/zahid.JPG", // Corrected path
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"} // Fallback image if project.image is missing
                alt={project.title}
                width={300}  // Or use layout="fill" or "responsive" if you prefer
                height={200} // Or use layout="fill" or "responsive" if you prefer
                className="w-full h-48 object-cover" // object-cover to maintain aspect ratio
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}