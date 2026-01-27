import React from 'react'

export const Education = ({ prop }) => {
  return (
    <div className='w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-sm duration-200 hover:border-[var(--border-color)]'>
      <div className='flex flex-col gap-1'>
        <h3 className='font-gabarito text-base font-bold text-[var(--head-color)] md:text-lg'>
          {prop.college}
        </h3>
        <div className='flex flex-wrap items-baseline justify-between gap-2'>
          <p className='text-sm text-[var(--text-color)]'>
            {prop.degree}
          </p>
          <span className='shrink-0 text-sm text-[var(--text-color)]'>
            {prop.duration}
          </span>
        </div>
      </div>
    </div>
  )
}
