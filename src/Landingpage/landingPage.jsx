import Blog from './components/blog'
import Hero from './components/hero'
import Team from './components/team'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Section1 from './components/about'
import WhyJoin from './components/WhyJoin'

const LandingPage = () => {
  return (
    <main className='flex flex-col w-full font-Poppins'>
      <Navbar />
      <Hero />
      <Section1 />
      <WhyJoin />
      <Blog />
      <Team />
      <Footer />
    </main>
  )
}

export default LandingPage
