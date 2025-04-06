import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-16 px-[5%] md:flex-row">
    {/* Left side - Team Images */}
    <div className="relative w-full md:w-1/2 h-[300px] flex items-center justify-center">
      {/* Team member images with overlapping effect */}
      <div className="relative w-full h-full">
        {/* Top right image */}
        <div className="absolute top-0 right-[20%] w-24 h-24 md:w-32 md:h-32">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
            alt="Team member"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        
        {/* Center image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
            alt="Team member"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        
        {/* Bottom left image */}
        <div className="absolute bottom-0 left-[20%] w-24 h-24 md:w-32 md:h-32">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            alt="Team member"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>

    {/* Right side - Content */}
    <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-2xl font-bold font-DMSans md:text-3xl font-DM-Sans">
        Write, read and connect with great minds on chatter
      </h2>
      
      <p className="text-Wayne">
        Share people your great ideas, and also read write-ups based on your interests, connect with people of same interests and goals
      </p>

      <Link to="/news/explore" className="inline-block bg-Leo text-white px-8 py-3 rounded-md w-fit self-center sm:self-start">
        Get started
      </Link>
    </div>
    </section>
  )
}

export default Team