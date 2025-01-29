import { IoMdArrowRoundForward } from "react-icons/io";
const SeePills = () => {
  const data = [
    {
      title: "See All Sleeping Pills",
      img: "https://www.sleepingpillsuk.com/images/nootro_home.jpg",
    },
    {
      title: "See All Anxiety Medications",
      img: "https://www.sleepingpillsuk.com/images/pain_home.jpg",
    },
    {
      title: "See All PainKillers",
      img: "https://www.sleepingpillsuk.com/images/anxiety_home.jpg",
    },
    {
      title: "See All Notropics Medications",
      img: "https://www.sleepingpillsuk.com/images/anxiety_home.jpg",
    },
  ];

  const propagate = (event) => {
    console.log(event.currentTarget);
  };
  return (
    <div className="mt-8 flex justify-center flex-wrap items-center  md:px-10 lg:px-0 md:justify-between space-y-4 sm:space-y-0  overflow-hidden">
      {data?.map((item) => {
        return (
          <div className="max-w-72 gap-3  hover:shadow-2xl group hover:shadow-black">
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="transition-all transform hover:scale-105 duration-300 overflow-hidden"
              />
            </div>
            <div className="flex items-center btn-hover group-hover:bg-[#285270] space-x-1 bg-[#2e7bb6] hover:bg-[#000] text-white py-2 justify-center ">
              <p>{item.title}</p>
              <IoMdArrowRoundForward />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SeePills;
