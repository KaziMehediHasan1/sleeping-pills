import { IoMdStar } from "react-icons/io";
import FormElement from "./Form";
const Review = () => {
  const reviews = [
    {
      user: "Kazi Mehedi Hasan",
      date: new Date().toLocaleTimeString(),
      comment:
        "Brilliant company I was not sure to start with but I paid and got what I needed and would recommend to my friends and family. If I had the money I would be purchasing today but when I do get paid I will use this company again.",
    },
    {
      user: "Ssrah",
      date: new Date().toLocaleTimeString(),
      comment:
        "Excellent site who deliver exactly what they say they will. I would never have even attempted to order this type of medication online before as itâ€™s an absolute minefield of dodgy vendors, unscrupulous practices and counterfeit meds. My favourite thing is how responsive customer service is they never take more than 24 hours to reply to every single email you send. My only criticism might be it sometimes takes way longer than it should to arrive but eventually you always get what you paid for.",
    },
    {
      user: "Ramjan Miya",
      date: new Date().toLocaleTimeString(),
      comment:
        "What a fantastic team and site I stumbled on this company by pure fluke it was in someone elseâ€™s comments on Facebook it did say they take a couple of weeks to get your order that couldnâ€™t be more further from the truth the longest iv ever had to wait is 6days from payment I suffer anxiety so I do email a lot to find out about my order and they always respond quit fast I have recommended them to all my friends and family and I buy off them regularly I will continue to 5stars all the way Thankyou",
    },
    {
      user: "Foysal Ahmend",
      date: new Date().toLocaleTimeString(),
      comment:
        "I have used SPUK numerous times in the past , this is the first time in a year or more so i was dubious about paying via bank transfer ( i had always payed credit card before ) . A nice suprise 3 working days later when my order arrived . Good to know when there is no National health service here in the UK anymore that service still exsists . Well done SPUK",
    },
    {
      user: "Foysal Ahmend",
      date: new Date().toLocaleTimeString(),
      comment: "Fast Delivery and super quality pills!",
    },
    {
      user: "Jhon Dow",
      date: new Date().toLocaleTimeString(),
      comment:
        "Great service, fast no nonsense. Used them for years and never have been let down. Keep up the good work",
    },
    {
      user: "Rakhi datto",
      date: new Date().toLocaleTimeString(),
      comment:
        "Best product ever,100% real tested them with the strips and what they say they are they are , from Ireland and was getting stoped by customs and lost 2 delivery and they sent a delivery for free, so ended up using northern Ireland and now get all deliveries and I'm so happy I can make an order every week without fail ,I'm telling everyone about this site.",
    },
    {
      user: "Minar Khan",
      date: new Date().toLocaleTimeString(),
      comment:
        "What a fantastic team and site I stumbled on this company by pure fluke it was in someone elseâ€™s comments on Facebook it did say they take a couple of weeks to get your order that couldnâ€™t be more further from the truth the longest iv ever had to wait is 6days from payment I suffer anxiety so I do email a lot to find out about my order and they always respond quit fast I have recommended them to all my friends and family and I buy off them regularly I will continue to 5stars all the way Thankyou",
    },
  ];

  return (
    <div className="border shadow-sm shadow-gray-400 rounded mt-4">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Coustome Review</h1>
        <>
          {reviews?.map((review) => {
            //  getFirtsLetter
            const getUsers = review.user;
            const convertArr = getUsers.split(",");
            const getFirstLatter = convertArr?.map((str) => str[0]);
            return (
              <div className="pt-8 flex sm:items-center space-x-4">
                <h1 className="sm:text-3xl text-xl font-semibold bg-gray-200 rounded-full text-center w-14 h-12 sm:w-16 sm:h-16 py-2 sm:py-3">
                  {getFirstLatter}
                </h1>
                <div className="border flex flex-col border-gray-200 rounded p-3 w-full">
                  <div className="flex flex-wrap items-center">
                    {review.user.length > 10 ? (
                      <>
                        <IoMdStar className="text-xl text-yellow-300 font-semibold " />
                        <IoMdStar className="text-xl text-yellow-300 font-semibold " />
                        <IoMdStar className="text-xl text-yellow-300 font-semibold " />
                        <IoMdStar className="text-xl text-yellow-300 font-semibold " />
                      </>
                    ) : (
                      <IoMdStar className="text-xl text-yellow-300 font-semibold " />
                    )}
                    <p className=" font-pillsFont">{review.user}</p> -{" "}
                    <p>{review.date}</p>
                  </div>
                  <p className="italic">{review.comment}</p>
                </div>
              </div>
            );
          })}
        </>
        <FormElement/>
      </div>
    </div>
  );
};

export default Review;
