"use client";
import React, { useRef } from "react";
import { TimelineContent } from "./timeline-animation";
import { VerticalCutReveal } from "./vertical-cut-reveal";
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection3() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section className="py-16 md:py-24 px-[5vw] bg-transparent" ref={heroRef}>
      <div className="max-w-[1400px] mx-auto">
        <div className="relative">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-[var(--accent-orange)] animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-sans font-medium text-[var(--text-muted)] tracking-widest uppercase"
              >
                WHO I AM
              </TimelineContent>
            </div>
            <div className="flex gap-4">
              <TimelineContent
                as="a"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-10 md:h-10 sm:w-8 w-8 sm:h-8 h-8 border border-[var(--color-border)] bg-[var(--bg-white)] rounded-full flex items-center justify-center cursor-pointer text-[var(--text-dark)] hover:text-[var(--accent-orange)] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-10 md:h-10 sm:w-8 w-8 sm:h-8 h-8 border border-[var(--color-border)] bg-[var(--bg-white)] rounded-full flex items-center justify-center cursor-pointer text-[var(--text-dark)] hover:text-[var(--accent-orange)] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-10 md:h-10 sm:w-8 w-8 sm:h-8 h-8 border border-[var(--color-border)] bg-[var(--bg-white)] rounded-full flex items-center justify-center cursor-pointer text-[var(--text-dark)] hover:text-[var(--accent-orange)] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-10 md:h-10 sm:w-8 w-8 sm:h-8 h-8 border border-[var(--color-border)] bg-[var(--bg-white)] rounded-full flex items-center justify-center cursor-pointer text-[var(--text-dark)] hover:text-[var(--accent-orange)] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </TimelineContent>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group h-[300px] md:h-[500px] w-full mb-12"
          >
            <svg
              className="w-full h-full"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop"
              ></image>
            </svg>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm font-sans mb-16">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-[var(--accent-orange)] font-bold">10+</span>
                <span className="text-[var(--text-muted)]">years of experience</span>
                <span className="text-[var(--color-border)]">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-[var(--accent-orange)] font-bold">500+</span>
                <span className="text-[var(--text-muted)]">families captured</span>
              </div>
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="text-[var(--accent-orange)] font-serif italic">100%</span>
                <span className="text-[var(--text-muted)] uppercase text-sm font-sans tracking-widest">authentic</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
              >
                <span className="text-[var(--accent-orange)] font-bold">1000s</span>
                <span className="text-[var(--text-muted)]">of memories</span>
                <span className="text-[var(--color-border)] lg:hidden block">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <h1 className="sm:text-4xl md:text-5xl text-3xl !leading-[1.1] font-serif text-[var(--text-dark)] mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.2,
                }}
              >
                Capturing the beauty of what is real.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-[var(--text-muted)] font-sans font-light"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-sm"
              >
                <p className="leading-relaxed">
                  I started Hatched Photography in 2013, after having my two boys. Looking at their little faces and seeing how fast they grow and change, I wanted to capture all their little moments. My husband had bought me a fancy camera while I was pregnant and it became my mission to learn how to use it. Once I picked it up I never looked back.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-sm"
              >
                <p className="leading-relaxed">
                  I am passionate about ‘Lifestyle’ newborn and family photography because, as a mom, I understand first hand how fleeting all these moments are. I look at each family and see such beauty—a beauty that I feel fortunate to get to capture in my lens and share with the world.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-left md:text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-[var(--accent-orange)] text-2xl font-serif italic mb-2"
              >
                CHRISTINA
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-[var(--text-muted)] font-sans text-sm mb-8 tracking-widest uppercase"
              >
                Photographer | Visual Storyteller
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-8"
              >
                <p className="text-[var(--text-dark)] font-sans text-lg md:text-xl font-medium mb-4">
                  Ready to transform your family's memories into art?
                </p>
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex md:justify-end"
              >
                <Link
                  to="/#contact"
                  className="bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] flex w-fit gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-[var(--text-dark)] px-6 py-4 rounded-full cursor-pointer font-sans text-sm tracking-widest uppercase items-center"
                >
                  LET'S COLLABORATE <ArrowRight className="w-4 h-4" />
                </Link>
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
