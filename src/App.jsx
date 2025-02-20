import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"  
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Banner from "./components/Banner"



function App() {


  return (
    <>
      {/* <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-25%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>  */}
      
     <div className=" bg-zinc-800 bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    {/* <div className="h-[4000px]"></div> */}
      {/* </div> */}
</div>
   
    </>
  )
}

export default App
