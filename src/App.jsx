import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import img from "../public/topLeft.jpg";
import tC from "../public/topCenter.jpg";
import Nav from "./nav";
import Team from "./team";
import Contact from "./contact";
import Flay from "./flay";
import { PhoneIcon, PlayCircleIcon, SparklesIcon } from '@heroicons/react/20/solid';


const DrinksSolutions = [
  { name: 'Starlight Mojito', description: 'Get a better understanding of your traffic', href: '#', icon: SparklesIcon ,price: 60},
  { name: 'Galaxy Smoothie', description: 'Speak directly to your customers', href: '#', icon: SparklesIcon, price:65 },
  { name: 'Milky Way Shake', description: "Your customers' data will be safe and secure", href: '#', icon: SparklesIcon, price: 80 },
  { name: 'Zero Gravity Coffee', description: 'Connect with third-party tools', href: '#', icon: SparklesIcon, price: 100 },
  { name: 'Cosmic Blue Lemonade', description: 'Build strategic funnels that will convert', href: '#', icon: SparklesIcon, price: 110 },
];

const dessertsSolutions = [
  { name: 'stardust Donuts', description: 'Get a better understanding of your traffic', href: '#', icon: SparklesIcon, price: 50 },
  { name: 'Nebula Ice Cream', description: 'Speak directly to your customers', href: '#', icon: SparklesIcon, price: 30 },
  { name: 'Planetary CheeseCake', description: "Your customers' data will be safe and secure", href: '#', icon: SparklesIcon, price: 60 },
  { name: 'Moon Rock Brownies', description: 'Connect with third-party tools', href: '#', icon: SparklesIcon, price: 65 },
  { name: 'Black Hole Lava Cake', description: 'Build strategic funnels that will convert', href: '#', icon: SparklesIcon, price: 80 },
];
const MainDishesSolutions = [
  { name: 'Galactic Burger', description: 'Get a better understanding of your traffic', href: '#', icon: SparklesIcon, price: 160 },
  { name: 'Nebula Steak', description: 'Speak directly to your customers', href: '#', icon: SparklesIcon, price: 120 },
  { name: 'Meteor Fries', description: "Your customers' data will be safe and secure", href: '#', icon: SparklesIcon, price: 140 },
  { name: 'Cosmic Pasta', description: 'Connect with third-party tools', href: '#', icon: SparklesIcon, price: 130 },
  { name: 'Supernova Chicken', description: 'Build strategic funnels that will convert', href: '#', icon: SparklesIcon, price: 110 },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function App() {
  return (
    <>
      {/* <Nav/> */}
      <div>
        {/* Background Image */}
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-no-repeat bg-cover bg-center mx-0 -z-10"
          style={
            {
              // backgroundImage: "url('/public/bg.png')",
            }
          }
        ></div>
        {/* Content */}
        <div className="relative z-500">
          <div className="h-screen flex flex-col items-center justify-center font-bold text-shadow-lg text-shadow-fuchsia-400 text-3xl  ">
            {/* Welcome to Rbit Bits B litter shoud be bold and have 5px shadow and the  i need it to have less space around  */}
            <h1 className="text-white text-4xl bg-blue-950 p-3 border-2 border-blue-900 rounded-lg   ">
              Welcome to{" "}
              <span className="text-fuchsia-700 text-shadow-fuchsia-400 text-shadow-lg font-bold -mr-3">
                🪐
              </span>
              rbit
              <span className="text-fuchsia-700 text-shadow-fuchsia-400 text-shadow-lg font-bold ml-3 ">
                B
              </span>
              ites{" "}
            </h1>
            {/* //img to the left take 30 % of the screen and be 100% height */}
            <img
              src={img}
              alt="logo"
              className=" hidden -z-2 absolute border-fuchsia-700 border-solid  border-4 border-opacity-50 rounded-full  h-1/12 top-3 left-2 "
            />

            <img
              src={tC}
              alt="logo"
              className="hidden -z-2 absolute border-fuchsia-700 border-solid  border-4 border-opacity-50 rounded-full w-1/5 h-1/12 -top-28  "
            />
            <img
              src={tC}
              alt="logo"
              className=" hidden -z-2 absolute border-fuchsia-700 border-solid  border-4 border-opacity-50 rounded-full w-1/5 h-1/12 top-3 right-2  "
            />
            <div className="text-white text-shadow-lg text-shadow-fuchsia-400 text-xl block mt-12 ">
              scroll down
            </div>
            <div className="text-white text-shadow-lg text-shadow-fuchsia-400 text-3xl block ">
              ⬇️
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col">
            <Flay name="Drinks" solutions={DrinksSolutions} callsToAction={callsToAction} />
            <Flay name="Main Dishes" solutions={MainDishesSolutions} callsToAction={callsToAction} />
            <Flay name="Desserts" solutions={dessertsSolutions} callsToAction={callsToAction} />

            {/* <h1 className="text-white text-4xl">Sliding Content Section 1</h1> */}
            {/* <img src={menu} alt="logo" className="w-full max-h-10/12 " /> */}

            {/* <div className="flex flex-row items-center justify-center">
          <img src={menu} alt="logo" className="w-1/2 h-1/2" />
            <div className="flex flex-col items-center justify-center">
             <img src={menu} alt="logo" className="w-1/2 h-1/2" />
            </div>
            <div className="flex flex-col items-center justify-center">
              TITILE 1
            </div>
            <div className="flex flex-col items-center justify-center">
              TITILE 1
            </div>
          </div> */}
          </div>
          <div className="h-screen flex items-center justify-center">
            <Team />
          </div>
          <div className="">
            <Contact />
          </div>
          {/* <div className="h-screen flex items-center justify-center">
            <h1 className="text-white text-4xl">Sliding Content Section 1</h1>
          </div>
          <div className="h-screen flex items-center justify-center">
            <h1 className="text-white text-4xl">Sliding Content Section 2</h1>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
