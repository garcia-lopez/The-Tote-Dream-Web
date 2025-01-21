import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion } from "motion/react";
import close_icon from '../assets/close_icon.png'
import Backdrop from './Backdrop';

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

const ToteDialogue = (props) => {

    return <>{props.data &&  <Backdrop onClick={props.handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className='p-4 bg-[#EAD9D1] rounded-[10px] drop-shadow-2xl'
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="m-auto grid w-full" onClick={props.handleClose}>
            <div className='place-self-end w-[50px] hover:cursor-pointer'>
              <img src={close_icon}></img>
            </div>
        </div>
         <img className='h-[300px] lg:h-[450px] lg:w-[450px] w-[300px] rounded-[10px] mt-4 mb-4' src={props.data.url} ></img>
        <div className=' w-full h-[50px] flex flex-row rounded-[10px]'>
             <div
                 className="w-3/12 h-full"
                 style={{ backgroundColor: props.data.Color_1 }}
             ></div>
             <div
                 className="w-3/12 h-full"
                 style={{ backgroundColor: props.data.Color_2 }}
             ></div>
             <div
                 className="w-3/12 h-full"
                 style={{ backgroundColor: props.data.Color_3 }}
             ></div>
             <div
                 className="w-3/12 h-full"
                 style={{ backgroundColor: props.data.Color_4 }}
             ></div>
        </div>


        </motion.div>
    </Backdrop>}
        </>
        
    } 
      
    
;

export default ToteDialogue

//top-1/2 left-1/2
/*
o estamos posicionando en el punto medio de la pantalla 
(50% desde arriba y 50% desde la izquierda). 
Sin embargo, esto solo coloca la esquina superior izquierda 
del elemento en el centro de la pantalla, no el elemento completo. 
*/

/**
 * transform -translate-x-1/2 -translate-y-1/2
 * desplaza el elemento hacia atrás la mitad de su propio 
 * ancho y alto. 
 * Así, su centro queda alineado con el centro de la pantalla.
 
Notes:
Even if you don’t use props in your component, 
it is included by default as the first argument 
because React expects two arguments for any 
component wrapped with forwardRef. 
Omitting it would shift the position of ref to 
the first argument, which would break the 
pattern that React relies on when forwarding refs.

*/