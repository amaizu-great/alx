import { Chart, Profile2User, Edit } from 'iconsax-react'

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded shadow-sm w-full md:max-w-[400px]">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center bg-[#543EE0]/10 rounded-full mb-4">
          <Icon 
            size="24" 
            color="#543EE0"
            variant="Bulk"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </div>
  )
}

const WhyJoin = () => {
  const features = [
    {
      icon: Chart,
      title: "Analytics",
      description: "Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time"
    },
    {
      icon: Profile2User,
      title: "Social interactions",
      description: "Users on the platform can interact with posts they like, comment and engage in discussions"
    },
    {
      icon: Edit,
      title: "Content creation",
      description: "Write nice and appealing with our in-built markdown & rich text editor"
    }
  ]

  return (
    <section className="py-16 px-[5%] ">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-DM-Sans">
            Why you should join chatter
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people
          </p>
        </div>

        <div className=" flex flex-wrap gap-4 w-full justify-around md:flex-nowrap">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyJoin 