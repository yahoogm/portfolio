const CardContactAtom = ({ icon, title, description }) => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center px-3 text-my-primary">
        <div data-aos="flip-right">{icon}</div>
      </div>
      <div
        className="border-l-2 border-lm-text dark:border-dm-text px-3 py-1"
        data-aos="fade-left"
      >
        <div className="font-bold">{title}</div>
        <div className="text-neutral-400 text-sm">{description}</div>
      </div>
    </div>
  );
};

export default CardContactAtom;
