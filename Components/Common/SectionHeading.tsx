const SectionHeading = ({ title, white = false }) => {
  return (
    <h2
      className={`font-bold text-3xl mb-14  ${
        white ? "text-white" : "text-black"
      }`}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
