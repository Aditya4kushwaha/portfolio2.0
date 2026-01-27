import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full mt-16 border-t border-[var(--border-color)] bg-[var(--footer-bg)]/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-[var(--head-color)] font-instrument-serif text-xl font-bold border-b-2 border-dashed border-purple-400 w-fit">Aditya Kushwaha</h3>
            <p className="text-[var(--subtext-color)] text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[var(--subtext-color)] text-sm">
              made with <span className="text-red-600">♥</span> by AdityaXdev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
