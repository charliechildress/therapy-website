import { motion } from "framer-motion";
import { textVariant, slideInLeft, slideInRight } from "../animations";
import { SectionWrapper } from "../wrapper";
import { services } from "../constants";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <section className="flex sm:flex-col relative  min-h-screen h-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        className="pt-[110px] md:pt-[80px] sm:pt-[80px] xs:pt-[80px] flex-none w-full"
      >
        <div className="flex-0 flex md:flex-col sm:flex-col xs:flex-col relative w-full sm:pr-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="flex-0 w-1/2 md:w-4/5 sm:w-full xs:w-full"
          >
            <h2 className="flex-0 font-serif-italic font-semibold text-dark-text text-2xl 3xl:text-6xl 2xl:text-6xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-xl">
              Services
            </h2>
            <div className="flex-row">
              <div className="flex drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] flex-col justify-center">
                {services.map((service) => {
                  return (
                    <div className="flex pt-6 sm:pt-4 xs:pt-2">
                      <p className="font-bold text-card-text font-serif 3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-md">
                        {service.service}
                      </p>
                      <p className="px-2 font-bold text-card-text font-serif-italic 3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-md">
                        -
                      </p>
                      <p className="pt-0.5 font-medium text-card-text font-serif-italic 3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-md">
                        {service.price}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <h2 className="flex-0 font-serif-italic pt-6 font-semibold text-dark-text text-2xl 3xl:text-6xl 2xl:text-6xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-xl">
              Documents
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="flex-2 flex justify-center items-center w-1/2 -mt-4 pr-20 sm:pr-0 m-10 md:w-full sm:w-full xs:w-full pt-10 sm:pt-20 "
          >
            <ContactCard />
          </motion.div>
        </div>
        <div className="flex justify-center pr-40 lg:pr-30 md:pr-20 sm:pr-10 xs:pr-3">
          <p className="mt-12 mb-12 lg:mt-5 md:mt-5 sm:mt-5 xs:mt-5 self-center font-serif font-medium text-dark-text text-sm 3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs">
            Copyright © 2024 by Patricia Childress. All rights reserved.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
