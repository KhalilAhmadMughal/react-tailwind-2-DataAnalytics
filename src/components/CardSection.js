import React from "react";
import Card from "./Card";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const CardSection = () => {
  return (
    <div className="bg-gray-100 w-full py-12 flex flex-col gap-12 md:flex-row md:justify-center md:flex-wrap">
      <Card
        userImage={single}
        amount="159"
        title="single user"
        userAllow="1"
        storage="500"
        sendUpto="2"
      />
      <Card
        userImage={double}
        amount="300"
        title="double user"
        userAllow="2"
        storage="250"
        sendUpto="5"
      />
      <Card
        userImage={triple}
        amount="420"
        title="triple user"
        userAllow="3"
        storage="1600"
        sendUpto="10"
      />
    </div>
  );
};

export default CardSection;
