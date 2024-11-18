import { useState, forwardRef, useImperativeHandle } from 'react';
import close_icon from '../assets/close_icon.png'

const ToteDialogue = forwardRef((props, ref) => {
    const [openDialogue, setOpenDialogue ] = useState(false);

    function toggleDialog() {
        try{
            setOpenDialogue(!openDialogue);
        } catch(error){
            console.log(error)
        }
    }
    useImperativeHandle(ref, () => ({
        toggleDialog
    }));



    return <>
      {
        props.data && <dialog open={openDialogue} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-[#EAD9D1] rounded-[10px] drop-shadow-2xl transition-all duration-500 ease-out ${openDialogue ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}">
        <div className="m-auto grid w-full" onClick={() => toggleDialog()}>
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

    </dialog>


      }
    </>
});

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