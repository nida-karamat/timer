import { useState } from "react";
// import { FaFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { FaThreads } from "react-icons/fa6";
const Countdown = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 8);
    launchDate.setHours(23, 55, 41, 0);
    const difference = launchDate - new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
    return () => clearInterval(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-lg md:text-2xl mb-6">WE'RE LAUNCHING SOON</h1>
      <div className="flex space-x-6">
        {Object.entries(timeLeft).map(([id, value]) => (
          <div key={id} className="bg-gray-800 p-6 rounded-lg text-center">
            <span className="text-orange-400 text-4xl font-bold">
              {String(value).padStart(2, "0")}
            </span>
            <div className="text-xs mt-2">{id}</div>
          </div>
        ))}
      </div>
      <div className="flex space-x-5 mt-8">
{/*         <FaFacebook />
        <FaInstagram />
        <FaThreads /> */}
      </div>
    </div>
  );
};

export default Countdown;
