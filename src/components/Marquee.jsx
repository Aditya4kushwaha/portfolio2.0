import React from 'react'
import './Marquee.css'
const skills = [{name: "C++", image:"cplusplus"}, {name: "JavaScript", image:"javascript"}, {name: "React", image:"react"}, {name: "TailwindCSS", image:"tailwind-css"}, {name: "HTML", image:"html"}, {name: "CSS", image:"css"}, {name: "PostgreSQL", image:"postgresql"}, {name: "Git", image:"git"}, {name: "Python", image:"python"}];
function Box({prop}) {
  return (
    <div className='flex justify-center items-center flex-col p-4 gap-2 h-20 w-20 md:h-30 md:w-30 text-center group/box'>
        <img src={`/skills/${prop.image}.png`} alt={prop.name} className='h-8 md:h-10 w-auto grayscale group-hover/box:grayscale-30 duration-200 group-hover/box:scale-120 object-cover'/>
        <div className='text-[var(--text-color)] text-sm group-hover/box:text-[var(--head-color)] group-hover/box:scale-110 duration-200'>{prop.name}</div>
    </div>
  )
}
export const Marquee = () => {
    return (
        <div className='group/marquee relative flex flex-row w-full overflow-hidden justify-center items-center'>
        <div className='absolute top-0 left-0 h-full w-[100px] bg-linear-to-r from-[var(--bg-main)] to-transparent z-10'></div>
        <div className='absolute top-0 right-0 h-full w-[100px] bg-linear-to-l from-[var(--bg-main)] to-transparent z-10'></div>
            <div className='flex justify-center animate-marquee flex-row group-hover/marquee:[animation-play-state:paused]'>
                {skills.map((element, index) => (
                    <Box key={index} prop={element} />
                ))}
            </div>

            <div className='flex justify-center animate-marquee flex-row group-hover/marquee:[animation-play-state:paused]'>
                {skills.map((element, index) => (
                    <Box key={index} prop={element} />
                ))}
            </div>
            
            <div className='flex justify-center animate-marquee flex-row group-hover/marquee:[animation-play-state:paused]'>
                {skills.map((element, index) => (
                    <Box key={index} prop={element} />
                ))}
            </div>
        </div>
    )
}
