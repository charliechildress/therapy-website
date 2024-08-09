import profile from "../constants/icons/profile.jpg";

const AboutCard = () => {
  return (
    <div className="rounded-full flex justify-evenly items-center flex-col mt-[-60px] sm:pt-5">
      <img
        src={profile}
        alt="profile"
        className="rounded-lg h-[500px] lg:h-[350px] md:h-[300px] sm:h-60 xs:h-40 "
      ></img>
    </div>
  );
};

export default AboutCard;
