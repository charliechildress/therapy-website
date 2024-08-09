import { motion } from "framer-motion";
import React from "react";
import { introduction } from "../constants";
import AboutCard from "../components/AboutCard";
import { slideInLeft, slideInRight } from "../animations";
import { SectionWrapper } from "../wrapper";

const About = () => {
  return (
    <section className="pt-[180px] flex flex-col relative min-h-screen min-w-screen">
      <div className="flex-0 flex sm:flex-col xs:flex-col relative w-full xl:pt-5 2xl:pt-5 sm:pr-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
          className="flex-0 w-1/2 sm:w-full xs:w-full"
        >
          <div className="flex-row font-serif-italic">
            <h2 className="flex-0 mt-[-55px] 2xl:mt-[-80px] xl:mt-[-70px] md:mt-[-70px] sm:mt-[-80px] xs:mt-[-100px]  3xl:min-h-[60px] 2xl:min-h-[60px] xl:min-h-[60px] lg:min-h-[40px] md:min-h-[40px] sm:min-h-[36px] xs:min-h-[28px] italic font-semibold text-dark-text text-2xl 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl">
              Hello and Welcome!
            </h2>
            <p className="font-serif flex-1 mt-4 font-medium text-dark-text text-md 3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">
              {introduction}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
          className="flex-2 flex pb-10 justify-center items-center w-1/2 sm:w-full xs:w-full pt-8 sm:pt-20 xs:pt-[90px]"
        >
          <AboutCard></AboutCard>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
