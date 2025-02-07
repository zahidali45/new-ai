import { ArrowDownCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi- I am Muhammad Zahid </h1>
        <p className="text-xl md:text-2xl mb-8">Generative AI Engineer / Innorvating the future  of Artificial Intellingence </p>
        <a
          href="#capabilities"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300"
        >
          Explore My data list
        </a>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownCircle className="w-10 h-10" />
      </div>
    </section>
  )
}

