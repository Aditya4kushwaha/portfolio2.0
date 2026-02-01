import React from 'react'
import './Marquee.css'
import { techStack } from './SkillBlocks'

const marqueeSkills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "TailwindCSS"
];

function Box({techName}) {
  const tech = techStack.find(t => t.name === techName) || { name: techName };
  const Icon = tech.Icon;
  
  return (
    <div className='flex justify-center items-center flex-col p-4 gap-2 h-20 w-20 md:h-30 md:w-30 text-center group/box'>
        {Icon ? (
             <Icon className='h-8 md:h-10 w-auto grayscale group-hover/box:grayscale-30 duration-200 group-hover/box:scale-120 object-cover' style={{ color: tech.color }} />
        ) : (
            <div className='h-8 md:h-10 w-auto flex items-center justify-center text-xs'>No Icon</div>
        )}
        <div className='text-[var(--text-color)] text-sm group-hover/box:text-[var(--head-color)] group-hover/box:scale-110 duration-200'>{tech.name}</div>
    </div>
  )
}
export const Marquee = () => {
    return (
        <div className='group/marquee relative flex flex-row w-full overflow-hidden justify-center items-center'>
        <div className='absolute top-0 left-0 h-full w-[100px] bg-linear-to-r from-[var(--bg-main)] to-transparent z-10'></div>
        <div className='absolute top-0 right-0 h-full w-[100px] bg-linear-to-l from-[var(--bg-main)] to-transparent z-10'></div>
            <div className='flex justify-center animate-marquee flex-row group-hover/marquee:[animation-play-state:paused]'>
                {marqueeSkills.map((name, index) => (
                    <Box key={index} techName={name} />
                ))}
            </div>

            <div className='flex justify-center animate-marquee flex-row group-hover/marquee:[animation-play-state:paused]'>
                {marqueeSkills.map((name, index) => (
                    <Box key={index} techName={name} />
                ))}
            </div>
            
            <div className='flex justify-center animate-marquee flex-row group-hover/marquee:[animation-play-state:paused]'>
                {marqueeSkills.map((name, index) => (
                    <Box key={index} techName={name} />
                ))}
            </div>
        </div>
    )
}
