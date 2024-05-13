// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import HomeImg from "../../images/HomeImg.png"
const Home = () => {
  const Animate = "Welcome to Our Website!";
  const [headlineVisible, setHeadlineVisible] = useState("");
  const animationSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const animateText = () => {
      if (currentIndex <= Animate.length) {
        setHeadlineVisible(Animate.slice(0, currentIndex));
        currentIndex++;
        setTimeout(animateText, animationSpeed);
      } else {
        // Animation complete, reset currentIndex to start over
        currentIndex = 0;
        setTimeout(animateText, animationSpeed);
      }
    };

    animateText();

    // Clean up the timer when the component unmounts
    return () => clearTimeout();
  }, []);

    return (
      <div className="">
        <h1 className="text-3xl text-center mx-auto h-[100px] lg:w-[50%] font-bold">{headlineVisible}</h1>
        <img src={HomeImg} alt="Home" className="mx-auto" />
      </div>
    );
};

export default Home;
