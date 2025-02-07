import { Code, Layout, Zap, Database } from "lucide-react"

const capabilities = [
  { icon: Code, title: "Full-Stack Development", description: "Proficient in both frontend and backend technologies" },
  { icon: Layout, title: "Responsive Design", description: "Creating beautiful, adaptive user interfaces" },
  { icon: Zap, title: "Performance Optimization", description: "Enhancing web application speed and efficiency" },
  { icon: Database, title: "Database Management", description: "Designing and optimizing database structures" },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <capability.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-gray-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

