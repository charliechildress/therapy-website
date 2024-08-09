import { motion } from "framer-motion";
import { slideInLeft } from "../animations";
import background from "../constants/icons/resources_background.png";

import BookCards from "../components/BookCards";

const Resources = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
      }}
      className="px-40 sm:px-10 xs:px-4 flex flex-col w-full h-full items-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
        className="pt-[180px] flex-0 w-full sm:w-full xs:w-full"
      >
        <h2 className="flex-0 font-serif-italic mt-[-55px] 2xl:mt-[-80px] xl:mt-[-70px] md:mt-[-70px] sm:mt-[-80px] xs:mt-[-100px] 3xl:min-h-[60px] 2xl:min-h-[60px] xl:min-h-[60px] lg:min-h-[40px] md:min-h-[40px] sm:min-h-[36px] xs:min-h-[28px] font-semibold text-2xl 3xl:text-6xl 2xl:text-6xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-2xl">
          Explore some suggested resources!
        </h2>
      </motion.div>
      <div className=" mt-12 lg:mt-4 md:mt-2 sm:mt-0 xs:mt-0">
        <BookCards />
      </div>
    </div>
  );
};

export default Resources;
