import '../../src/App.css';
import  Shop_bag  from '../../src/assets/Bag_icon.png';
import Tote_bag from '../assets/Tote_bag.png'
import Stars from '../assets/Stars.png'

function Small_squares() {
    return (
        <>
            <div className='bg-TD-LightPink h-fit w-fit flex flex-wrap justify-center gap-2 p-4 rounded-[10px] lg:grid lg:grid-cols-2 lg:w-fit lg:p-6 lg:gap-4'>

               <div className="relative overflow-hidden h-[150px] w-[150px] lg:h-[160px] lg:w-[160px] bg-TD-SquarePink hover:bg-TD-HoverPink2 rounded-[10px] shrink-0 ">
                <img
                   className='w-[150px] h-[150px]'
                   src={Tote_bag }
                />
                <p  className='absolute inset-0 flex items-center justify-center font_dream font-semibold text-TD-DarkSquarePink font-semibold text-[45px]'>
                    Stock
                </p>
               </div> 
               <div className="relative overflow-hidden flex items-center justify-center h-[150px] w-[150px] lg:h-[160px] lg:w-[160px] bg-TD-DarkSquarePink hover:bg-TD-HoverPink1 rounded-[10px] shrink-0 "> 
               <img
                   className='absolute w-[50px] h-[50px] right-2 top-2 '
                   src={ Stars }
                />
                 <p className='font_dream text-TD-SquarePink text-[45px] self-center font-semibold'>
                    Reviews
                 </p>
                 <img
                   className='absolute w-[50px] h-[50px] left-2 bottom-2 '
                   src={ Stars }
                />
               </div>
             
               <div className="h-[150px] w-[150px] overflow-hidden hover:bg-TD-HoverPink1 sm:order-last  lg:order-none lg:h-[160px] lg:w-[160px] bg-TD-DarkSquarePink rounded-[10px] shrink-0 " >
               <img 
                   src={Shop_bag }
                   className='w-[150px] h-[150px]'
                />
               </div>
               <div className=" overflow-hidden flex flex-col justify-center h-[150px] w-[150px] lg:h-[160px] lg:w-[160px] bg-TD-SquarePink hover:bg-TD-HoverPink2 rounded-[10px] shrink-0 ">
               <p className='font_dream text-TD-DarkSquarePink text-[45px] self-center font-semibold'>
                    About
                 </p>
                 <p className='font_dream text-TD-DarkSquarePink mt-[-30px] text-[45px] font-semibold self-end mr-5'>Us</p>
               </div>
            </div>
        </>
    )
}

export default Small_squares;