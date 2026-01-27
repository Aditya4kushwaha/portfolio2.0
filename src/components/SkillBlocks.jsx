import React from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si'

const techStack = [
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, colorClass: 'text-[var(--head-color)]' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', Icon: SiExpress, colorClass: 'text-[var(--head-color)]' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
]

export function Box({ prop, size, gap = 2 }) {
  let heightClass = 'h-6'
  let textsize = 'text-sm'
  if (size === 'small') {
    heightClass = 'h-4'
    textsize = 'text-sm'
  }
  return (
    <div className={`group flex items-center justify-center gap-${gap} border border-[var(--border-color)] hover:border-[var(--subtext-color)] font-gabarito p-1 m-2 rounded-md duration-200 cursor-pointer`}>
      <img src={`skills/${prop.image}.png`} alt={prop.name} className={`${heightClass} w-auto py-1 object-cover duration-200`} />
      <div className={`${textsize}`}>{prop.name}</div>
    </div>
  )
}

export const SkillBlocks = () => {
  return (
    <div className='mt-6 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4'>
      {techStack.map(({ name, Icon, color, colorClass }) => (
        <div
          key={name}
          className='flex items-center gap-3 rounded-xl border-2 border-dotted border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 transition-colors hover:border-[var(--border-color)]'
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-visible ${colorClass || ''}`}
            style={color ? { color } : undefined}
          >
            <Icon size={26} className='block' style={color ? { color } : undefined} />
          </span>
          <span className='text-sm font-medium text-[var(--text-color)]'>{name}</span>
        </div>
      ))}
    </div>
  )
}
