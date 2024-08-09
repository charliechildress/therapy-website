import { motion } from "framer-motion";

const SectionWrapper = (Component, ComponentID) =>
  function Wrap() {
    return (
      <motion.section className="bg-light-bg pl-40 lg:pl-30 md:pl-20 sm:pl-10 xs:pl-3 w-full">
        <span className="hash-span" id={ComponentID}></span>
        <Component></Component>
      </motion.section>
    );
  };

export default SectionWrapper;
