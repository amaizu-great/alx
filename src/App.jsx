import './App.css'
import NavBar from './components/navbar'
import { Outlet } from 'react-router-dom'
import SearchBar from './components/searchBar'

function App() {
  return (
    <main className='flex flex-col items-center gap-5 font-Poppins md:gap-10'> 
      <SearchBar />
      <section className='flex flex-col w-full sm:border px-[5%] border-gray-200 sm:max-w-[80%] lg:max-w-[60%]'>
        <NavBar />
        <Outlet />  
      </section>
    </main>
  )
}

export default App
