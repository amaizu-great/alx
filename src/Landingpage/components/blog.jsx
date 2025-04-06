import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section id="blogs" className="py-12 px-[5%] flex flex-col gap-5 bg-[#FFEDCC80] justify-around items-center md:flex-row">
      <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
          alt="Testimonial author"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 max-w-[500px] text-center sm:text-left">
        <p className="text-[14px] md:text-[16px] text-Wayne">
          "Chatter has become an integral part of my online experience. As a
          user of this incredible blogging platform, I have discovered a vibrant
          community of individuals who are passionate about sharing their ideas
          and engaging in thoughtful discussions."
        </p>
 
        <h3 className="text-xl font-semibold text-Rex"> Adebobola Muhydeen </h3>
        <p className="text-gray-600">Software developer at Apple</p>

        <Link to="/news/explore" className="bg-Leo text-white px-8 py-3 rounded-md w-fit self-center sm:self-start">
          Read More
        </Link> 
      </div>
    </section>
  );
};

export default Blog;
