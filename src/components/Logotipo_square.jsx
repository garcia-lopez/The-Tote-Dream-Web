import '../../src/App.css';
import leafVector from '../../src/assets/leaf_vector.svg';
import paint_brush from '../assets/paint_brush.png'

function Logotipo_square() {
    return (
        <>
        <div className="relative bg-[#ffecf1] w-[340px] h-[200px] rounded-[60px] flex justify-center overflow-hidden lg:w-[500px] lg:h-[250px] lg:pt-4 lg:pb-4 sm:rounded-[60px]">
            <img
            src={paint_brush}
            className="absolute w-9/12  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            
            />
<div className="absolute flex items-center mt-10 lg:mt-6 ">
  <p className=" relative font_logotipo text-[52px] lg:text-[75px] ml-[-70px]">
    The tote
    <img 
    src={leafVector} 
    alt="" 
    className="absolute w-9 h-9 lg:w-14 lg:h-16 top-5 left-36 lg:left-52" 
  />
  </p>
</div>
            <p 
               className='absolute bottom-6 left-24 text-[50px] font_dream text-[#d599a0] lg:left-36 lg:text-[80px]'>
                DREAM
            </p>
        </div>
      </>
      

    )
}

export default Logotipo_square