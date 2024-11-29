import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5"

const testimonials = [
  {
    quote: "Exceeded all expectations! The attention to detail and dedication was unparalleled.",
    author: "John Doe"
  },
  {
    quote: "A seamless experience from start to finish—truly professional and innovative.",
    author: "Jane Smith"
  },
  {
    quote: "This project transformed our vision into reality. Couldn't be happier!",
    author: "Alex Johnson"
  },
  {
    quote: "Their creativity and execution have set a new standard in the industry.",
    author: "Emily Brown"
  },
  {
    quote: "Reliable, efficient, and outstanding quality. Highly recommended!",
    author: "Chris Wilson"
  },
  {
    quote: "The product works flawlessly, with top-notch support and updates.",
    author: "Lisa White"
  },
  {
    quote: "Their creativity brought life to our brand. Stunning work!",
    author: "Michael Taylor"
  },
  {
    quote: "Every detail was thoughtfully crafted to perfection—an artistic masterpiece.",
    author: "Sarah Davis"
  },
  {
    quote: "This event was nothing short of magical—truly unforgettable!",
    author: "Daniel Garcia"
  },
  {
    quote: "They created an experience that will be talked about for years.",
    author: "Sophia Martinez"
  }
];


const Testimonials = () => {
    const[ind,setInd]=useState(0)
   
   
    const forwardOp=()=>{
        if(ind>=0 && ind<testimonials.length-1){
            setInd(ind+1)
        }
    }
  
    const backwardOp=()=>{
        if(ind>0){
            setInd(ind-1)
        }
    }

     const{quote,author}=testimonials[ind]
  
  return <div>

    <h1>Testimonials</h1>
    <IoIosArrowForward onClick={forwardOp}/>
    <h1>Quote:{quote}</h1>
    <p>author:{author}</p>
    <IoArrowBackOutline onClick={backwardOp}/>
  </div>;
};

export default Testimonials;
