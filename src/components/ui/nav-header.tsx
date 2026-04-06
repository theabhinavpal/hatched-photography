"use client";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export function NavHeader({ className }: { className?: string }) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    height: 0,
    top: 0,
    opacity: 0,
  });

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Info', href: '/#info' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Families', href: '/#families' },
    { name: 'Newborn', href: '/#newborn' },
    { name: 'Seniors', href: '/#seniors' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <ul
      className={cn(
        "relative flex w-fit rounded-full border border-[var(--color-border)] bg-[var(--bg-white)]/80 backdrop-blur-md p-1.5 shadow-sm",
        className
      )}
      style={{ isolation: "isolate" }}
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Cursor position={position} />
      {links.map((link, i) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
        >
          <Tab setPosition={setPosition} href={link.href}>
            {link.name}
          </Tab>
        </motion.div>
      ))}
    </ul>
  );
}

const Tab: React.FC<{
  children: React.ReactNode;
  setPosition: any;
  href: string;
}> = ({
  children,
  setPosition,
  href
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        setPosition({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
          opacity: 1,
          left: ref.current.offsetLeft,
          top: ref.current.offsetTop,
        });
      }}
      className="relative z-10 block cursor-pointer"
    >
      {href.startsWith('/') && !href.includes('#') ? (
        <Link 
          to={href}
          className="block px-4 py-2 text-[0.65rem] lg:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--text-dark)] hover:text-white transition-colors duration-300"
        >
          {children}
        </Link>
      ) : (
        <a 
          href={href}
          className="block px-4 py-2 text-[0.65rem] lg:text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--text-dark)] hover:text-white transition-colors duration-300"
        >
          {children}
        </a>
      )}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 rounded-full bg-[var(--text-dark)] pointer-events-none"
      transition={{ 
        type: "spring", 
        stiffness: 350, 
        damping: 35,
        opacity: { duration: 0.2 }
      }}
    />
  );
};

export default NavHeader;
