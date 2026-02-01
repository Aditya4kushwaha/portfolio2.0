import './App.css'
import { NavBar } from './components/NavBar'
import { Marquee } from './components/Marquee'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { TypingEffect } from './components/TypingEffect'
import { useState } from 'react'
import { SkillBlocks, Box } from './components/SkillBlocks'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { SocialBox } from './components/SocialBox'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { useEffect } from 'react'
let experience = [{
    'position': "Freelance Web Developer",
    'organization': "Self-employed",
    'duration': "June 2025 – Present",
    'details': [
        "Achieved 30% growth for a client by designing their best responsive landing page using React.js and Tailwind CSS.",
        "Focused on creating excellent UI, enhancing user engagement and overall client satisfaction.",
        "Received positive feedback for timely delivery and high-quality work that boosted the client's business."
    ]
    // no image – optional
}]
let education = [{
    'degree': "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    'college': "Indian Institute of Information Technology, Bhagalpur",
    'duration': "2023 – 2027"
},
{
  'degree': "CBSE Senior Secondary (Class XII)",
  'college': "Smt. Banni Devi Senior Secondary School, Kushinagar",
  'duration': "2022"
}]
function App() {
  let text = ["Software Developer", "Freelancer", "Web Developer", "Competitive Programmer"];
  const [skillsState, setSkillsState] = useState("blocks"); // "marquee" or "blocks"
  
  
  const [isDark, setIsDark] = useState(false);
  useEffect(()=> {
    if(isDark) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
    
  }, [isDark]);
  return (
    <div className='flex flex-col justify-center items-center md:p-8 p-2'>
      <Analytics />
      <SpeedInsights />
      
      <NavBar setIsDark={setIsDark} isDark={isDark} />

      {/* <div className='relative bg-white -z-1 w-full h-auto'>
        <div className='absolute top-0 right-0 h-full w-[30px] md:w-[60px] bg-linear-to-l from-[#121212] to-transparent'></div>
        <div className='absolute top-0 left-0 h-full w-[30px] md:w-[60px] bg-linear-to-r from-[#121212] to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-[30px] md:h-[60px] bg-linear-to-t from-[#121212] to-transparent'></div>
        <div className='absolute top-0 right-0 w-full h-[30px] md:h-[60px] bg-linear-to-b from-[#121212] to-transparent'></div>
        <img src="icons/Berserk.jpg" alt="Berserk Banner" className='w-full h-auto' />
      </div> */}

      <div className='flex flex-col md:ml-4 md:mr-4 mt-10 text-[var(--text-main)] font-gabarito duration-100'>
        <div className='md:flex items-center'>
        <img src="/newpf.png" alt="Aditya Kushwaha" className='w-20 md:w-20 h-auto m-2 object-cover rounded-full' />
        <div className='grid grid-cols-1 md:grid-cols-2 ml-4 space-x-2'>
          <div className='md:text-5xl text-3xl text-[var(--text-main)] font-bold font-instrument-serif'>
            <div className='border-b-2 border-dashed border-purple-400 w-fit'>
              Aditya Kushwaha
            </div>
              <div className='text-[var(--subtext-color)] text-sm md:text-md flex space-x-2'><div>Kushinagar, UP | </div><TypingEffect text={text} /></div>
          </div>
          <div className='flex md:justify-end md:gap-4 gap-2 md:mr-8'>
            <a href='https://github.com/adityakushwahaksn' target="_blank" rel="noopener noreferrer" className='w-6 h-auto hover:scale-120 duration-200 my-2 bg-[var(--border-color)] md:bg-transparent rounded-full'><img src="icons/github.png" alt="" className='invert-[var(--invert-value)] object-cover' /></a>
            <a href='https://linkedin.com/in/adityakushwaha' target="_blank" rel="noopener noreferrer" className='w-6 h-auto hover:scale-120 duration-200 my-2 bg-[var(--border-color)] md:bg-transparent rounded-full'><img src="icons/linkedin.png" alt="" className='invert-[var(--invert-value)] object-cover' /></a>
            <a href='mailto:adityakushwahaksn@gmail.com' target="_blank" rel="noopener noreferrer" className='w-6 h-auto hover:scale-120 duration-200 my-2 bg-[var(--border-color)] md:bg-transparent rounded-full'><img src="icons/x.png" alt="" className='invert-[var(--invert-value)] object-cover' /></a>
            <a href='#' target="_blank" rel="noopener noreferrer" className='w-6 h-auto hover:scale-120 duration-200 my-2 bg-[var(--border-color)] md:bg-transparent rounded-full' title='Resume'><img src="icons/resume.png" alt="" className='invert-[var(--invert-value)] object-cover' /></a>
          </div>
        </div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='m-4 mt-4 text-md text-[var(--text-color)]'>
            {/* I build practical software with a focus on <p className='inline bg-amber-300 text-neutral-800 p-1 rounded-md'> efficiency, clarity, and speed.</p>
            &nbsp; Comfortable across frontend and backend, I care more about systems that work than buzzwords. */}
            <ul className='list-none gap-2 flex flex-col text-sm sm:text-base text-[var(--text-color)]'>
              <li>
                Hi! I am <span className='font-instrument-serif italic text-lg'>Aditya Kushwaha</span>, a <span className='bg-yellow-400 p-1 rounded-md font-bold text-neutral-800 dark:text-black'>web developer</span> && <span className='bg-green-400 p-1 rounded-md font-bold text-neutral-800 dark:text-black'>competitive programmer</span>. I love building <span className='border-b border-purple-300'>efficient and good looking web applications</span> that solve real-world problems.
              </li>
              {/* <br /> */}

              {/* <li>I’m an IT student who spends time both on <span className='font-bold font-white border-b border-green-400'> problem-solving fundamentals</span> and on <span className='font-bold font-white border-b border-yellow-400'> building software end-to-end.</span></li> */}
              {/* <br /> */}
              <li>
                I learn stuff by <span className='border-b border-purple-300'>building</span>. I break down <span className='border-b border-purple-300'>problems, solve them one by one, and iterate until it works just as I want it to be.</span>
              </li>
              <li>
                Besides coding, I enjoy <span className='border-b border-purple-300 font-serif italic'>watching cricket and playing cricket</span>.
              </li>
            </ul>
          </div>
<picture>
  <source media="(min-width: )" srcset="" />
  <img src="" alt="" />
</picture>
        </div>

      </div>
      <div className='relative flex flex-col justify-center items-center mt-8 w-full md:w-3/4'>
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl border-b-2 border-dashed border-purple-400'>
          Technologies & Tools
        </div>
        {/* the toggle button (doesnt look good imo, so commented for now) */}
        {/* <div className='relative grid grid-cols-2 border border-neutral-600 rounded-lg mt-4'>
          <div className={`absolute left-0 h-full w-1/2 bg-white transition-transform duration-300 ease-in-out ${skillsState==="marquee" ? "translate-x-0 rounded-l-lg rounded-r-0" : "translate-x-full rounded-r-lg rounded-l-0"}`}></div>
          <div className={`m-2 text-center z-10 cursor-pointer duration-300 ease-in-out ${skillsState==="marquee" ? "text-black" : ""}`} onClick={() => {setSkillsState("marquee")}}>Marquee</div>
          <div className={`m-2 text-center z-10 cursor-pointer duration-300 ease-in-out ${skillsState==="blocks" ? "text-black" : ""}`} onClick={() => {setSkillsState("blocks")}}>Blocks</div>
        </div> */}
        {skillsState === "marquee" && (
          <Marquee />
        )}
        {skillsState === "blocks" && (
          <SkillBlocks />
        )}
      </div>

      {/* Experience Section */}
      <section id='exp' className='relative flex flex-col justify-center items-center pt-20 md:px-8 w-full md:w-3/4'>
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl mb-2 border-b-2 border-dashed border-purple-400'>
          Experience
        </div>
        <div className='w-full space-y-6'>

          {experience.map((exp, index) => (
            <Experience key={index} prop={exp} />
          ))}


        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='relative flex flex-col justify-center items-center pt-20'>
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl mb-8 border-b-2 border-dashed border-purple-400'>
          Projects
        </div>
          <Projects />
      </section>

      {/* Education Section */}
      <div className='relative flex flex-col justify-center items-center md:mx-8 w-full md:w-3/4 my-6'>
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl mb-4 border-b-2 border-dashed border-purple-400'>
          Education
        </div>
        <div className='w-full space-y-6'>
          {education.map((edu, index) => (
            <Education key={index} prop={edu}/>
          ))}
        </div>
      </div>
      {/* Let's Connect Section */}
      <div id='connect' className='relative flex flex-col justify-center items-center md:mx-8 w-full md:w-3/4'>
        <div className='text-[var(--head-color)] font-instrument-serif text-3xl mb-2 border-b-2 border-dashed border-purple-400'>
          Let's Connect
        </div>
        <p className='text-[var(--subtext-color)] text-sm mb-6 text-center'>
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
            <SocialBox name="GitHub" image="github.png" invert={true} link="https://github.com/adityakushwahaksn" />
            <SocialBox name="LinkedIn" image="linkedin.png" invert={true} link="https://linkedin.com/in/adityakushwaha" />
            <SocialBox name="Resume" image="resume.png" invert={true} link="#" />
            <SocialBox name="LeetCode" image="leetcode.png" invert={false} link="https://leetcode.com/u/adityakushwahaksn" />
            <SocialBox name="CodeForces" image="codeforces.webp" invert={false} link="https://codeforces.com/profile/adityakushwahaksn" />
            <SocialBox name="CodeChef" image="codechef.webp" invert={true} link="https://www.codechef.com/users/adityakushwahaksn" />

        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default App
