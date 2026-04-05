"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: any;
  animationNum?: number;
  timelineRef?: React.RefObject<any>;
  customVariants?: any;
  className?: string;
  [key: string]: any;
}

export const TimelineContent = ({
  children,
  as = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  ...props
}: TimelineContentProps) => {
  const Component = motion[as as keyof typeof motion] || motion.div;

  return (
    <Component
      custom={animationNum}
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
