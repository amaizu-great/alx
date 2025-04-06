import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 px-[5%]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-Rex font-DM-Sans">
              About Chatter
            </h2>
            <p className="text-Wayne leading-normal text-[14px] md:text-[16px]">
              Chatter is a multi-functional platform where authors and readers 
              can have access to their own content. It aims to be a traditional 
              bookworm's heaven and a blog to get access to more text based 
              content. Our vision is to foster an inclusive and vibrant community 
              where diversity is celebrated. We encourage open-mindedness and 
              respect for all individuals, regardless of their backgrounds or beliefs. 
              By promoting dialogue and understanding, we strive
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[200px] md:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
              alt="Students in library" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About