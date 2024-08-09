const ContactButton = () => {
  return (
    <a href="Contact" className="group justify-center">
      <button className="absolute m-auto bottom-[100px] left-0 right-0 text-center text-card-border bg-light-bg font-serif font-400 p-6 pb-12 group-hover:border-4 group-hover:font-bold h-[70px] w-fit rounded-full border-2 border-card-border scroll-smooth">
        Schedule Appointment
      </button>
    </a>
  );
};

export default ContactButton;
