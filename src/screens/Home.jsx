import ContactButton from "../components/ContactButton";
import background from "../constants/icons/background.png";

const Home = () => {
  return (
    <section className="relative w-full h-screen bg-dark-bg">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}
        className="flex flex-col w-screen h-screen justify-around"
      >
        <div className="flex flex-col justify-evenly">
          <h1 className="text-center my-12 md:my-8 sm:my-6 xs:my-6 font-serif drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white text-8xl md:text-6xl sm:text-6xl xs:text-4xl">
            Wellness Begins Here
          </h1>
          <h2 className="font-serif my-4 md:my-3 sm:my-2 xs:my-2 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center text-4xl md:text-3xl sm:text-2xl xs:text-xl">
            Patricia Childress, MSW, LCSW
          </h2>
          <h3 className="font-serif-italic pt-10 text-dark-text text-center text-4xl md:text-3xl sm:text-2xl xs:text-xl ">
            Committed to providing compassionate, personalized care to help you
            navigate life’s complexities and reach your full potential. Let’s
            begin your journey to wellness today.
          </h3>
        </div>

        <div className="flex flex-row w-full justify-evenly">
          <ContactButton></ContactButton>
        </div>
      </div>
    </section>
  );
};

export default Home;
