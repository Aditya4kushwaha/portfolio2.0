import React, { useRef, useState } from 'react'

export const SocialBox = ({ image, name, link, invert }) => {
  const container = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e) => {
      if (container.current) {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const height = container.current.offsetHeight;
          if(height>300) {
            container.current.style.transform = `translate(${x + 10}px, ${y - height/2}px)`;
            return;
          }
          container.current.style.transform = `translate(${x + 10}px, ${y - height - 10}px)`;
      }
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='group relative flex items-center justify-center gap-2 font-gabarito rounded-full duration-200 cursor-pointer bg-[var(--card-bg)] hover:bg-[var(--hover-bg)] p-2' onMouseMove={handleMouseMove} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {/* This container adds horizontal scroll, causing issues */}
      {/* <div ref={container} className={`absolute bg-white rounded-md p-1 border border-(--border-color) top-0 left-0 pointer-events-none z-50 duration-200 ${isHover ? "opacity-100" : "opacity-0"}`}>
        <img src={`connect/${name.toLowerCase()}.png`} alt="" className='rounded-md w-[300px] max-w-none max-h-[500px]'/>
      </div> */}
        <img src={`icons/${image}`} alt={name} className={`h-6 w-auto object-cover ${invert ? "invert-[var(--invert-value)]" : ""} group-hover:opacity-100 duration-200`} />
        <span className='group-hover:block text-[var(--text-color)] text-sm group-hover:text-[var(--head-color)] duration-200'>{name}</span>
    </a>
  )
}
