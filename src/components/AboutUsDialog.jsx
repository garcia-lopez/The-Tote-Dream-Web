import { motion } from "motion/react";
import Backdrop from './Backdrop';
import '../../src/App.css';
import close_icon from '../assets/close_icon.png'
import BeigeTote from '../assets/BeigeTote.png'

const dropIn = { //Possible animation states
   hidden: {
     y: "-100vh",
     opacity: 0,
   },
   visible: {
     y: "0",
     opacity: 1,
     transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
     },
   },
   exit: {
     y: "100vh",
     opacity: 0
   },
};

const AboutUsDialog = ({handleClose}) => {
    return (
<Backdrop onClick={handleClose}>
  <motion.div
    onClick={(e) => e.stopPropagation()}
    className='relative p-4 bg-[#EAD9D1] rounded-[10px] drop-shadow-2xl'
    variants={dropIn}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <div 
       className="m-auto grid w-[300px] h-[450px] lg:w-[500px] lg:h-[500px]" 
       onClick={handleClose}>
      <div className=' w-[30px] lg:w-[50px] hover:cursor-pointer justify-self-end'>
        <img src={close_icon}></img>
      </div>
      <img src={BeigeTote} className="absolute h-[250px] lg:h-[300px] origin-bottom -rotate-12 left-16 z-0"></img>
      <img src={BeigeTote} className="absolute h-[250px] lg:h-[300px] origin-top-left rotate-12 scale-60 bottom-6 right-0 z-0"></img>
      <p className="absolute font_about_us top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20px] lg:text-[25px] z-5"
       >The Tote Dream creates personalized tote bags that reflect your style and story.
        <br /> With care and creativity, we deliver functional designs 
        <br /> that make every 
        <br /> bag unique and 
        <br /> meaningful.
      </p>
    </div>
  </motion.div>
</Backdrop>
    )

};

export default AboutUsDialog

//EVENT BUBBLING: prevent clicks on modal from bubbling to backdrop
/*
Normally when u click on something it bubbles up the dom
to find the first event handler to take care of it that default
browser behavior would cause the modal to automatically close anytime the content inside of it is clicked  
 */