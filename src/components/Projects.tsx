import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive online store with advanced filtering and search capabilities",
    image: "/placeholder.JPG?height=200&width=300",
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media management",
    image: "/placeholders.JPG?height=200&width=300",
  },
  {
    title: "AI-powered Chatbot",
    description: "Intelligent customer service chatbot with natural language processing",
    image: "/placeholde.JPG?height=200&width=300",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
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
  )
}

