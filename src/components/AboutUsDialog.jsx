import { motion } from "motion/react";
import Backdrop from './Backdrop';
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
            className='p-4 bg-[#EAD9D1] rounded-[10px] drop-shadow-2xl'
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
           <div className="m-auto grid w-full" onClick={handleClose}>
            <div className='place-self-end w-[50px] hover:cursor-pointer'>
              <img src={close_icon}></img>
            </div>
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