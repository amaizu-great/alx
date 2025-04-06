import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative h-[350px] md:h-[500px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img  src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070" alt="Writer at desk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-Rex/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-DM-Sans">
            Welcome to Chatter: A Haven for Text-Based Content
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Unleash the Power of Words, Connect with Like-minded Readers and Writers
          </p>

          <Link  to="/news/explore" 
            className="inline-block bg-Leo hover:bg-Leo/90 text-white font-medium px-8 py-3 rounded-md transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero