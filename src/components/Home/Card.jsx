import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import PillSelection from "./PillSelection";
import { Button } from "../ui/button";
import { TiShoppingCart } from "react-icons/ti";
const Card = () => {
  const cards = [
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zopiclone.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zopiclone.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/Dihydrocodeine-30mg.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/eszopiclone_2mg.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/eszopiclone_2mg.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
    {
      title: "Zopiclone 7.5 mg / 10 mg",
      img: "https://www.sleepingpillsuk.com/product-img/zaleplon.png",
      desc: (
        <>
          {" "}
          Zopiclone, sold under brand names such as Imovane and Datolan, is a
          sleep inducing medication for the treatment of insomnia. Treatment
          with zopiclone provides relief for people suffering from insomnia by
          allowing them to get to sleep quickly and stay asleep throughout the
          night.
        </>
      ),
    },
  ];
  return (
    <div className="flex md:px-10 lg:px-0 items-center justify-between flex-wrap gap-4 mt-5 px-5 sm:px-0">
      {cards?.map((card) => {
        return (
          <div className="border sm:w-[325px] w-[380px] p-5">
            <h1 className="text-xl font-semibold text-center pb-3">
              {card.title}
            </h1>
            <img src={card.img} alt="" />
            <p>{card.desc}</p>

            <div className="flex items-center space-x-2 justify-center">
              <RadioGroup
                defaultValue="option-one"
                className="flex py-6 items-center justify-center"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">7.5 mg</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">10 mg</Label>
                </div>
              </RadioGroup>
            </div>
            {/* selection pills */}
            <PillSelection />
            {/* button section */}
            <div className="flex items-center justify-center md:justify-between pt-4 space-x-6 sm:space-x-10 md:space-x-2">
              <Button className=" uppercase font-semibold w-[120px] ">View info</Button>
              <Button className="max-w-36 uppercase  font-semibold flex items-center space-x-1">
                <span className="text-7xl">
                  <TiShoppingCart />
                </span>
                <p>Buy Now</p>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
