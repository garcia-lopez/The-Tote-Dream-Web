import '../../src/App.css';
import leafVector from '../../src/assets/leaf_vector.svg';

function Logotipo_square() {
    return (
        <>
        <div className='bg-white w-[340px] h-[200px] rounded-[60px] flex justify-center pt-4 overflow-hidden lg:w-[500px] lg:h-[250px] lg:pt-4 lg:pb-4 sm:rounded-[60px] container'>
            <p 
              className='relative font_logotipo text-[52px] mt-6 mr-32 lg:text-[75px] shrink-0'>
                The tote
            </p>
            <img 
               src={leafVector} 
               alt="" 
               className='w-9 h-9 absolute top-14 left-44 lg:top-14 lg:left-72 lg:w-14 lg:h-16' 
            />
            <p 
               className='absolute bottom-6 left-24 text-[50px] font_dream text-[#d599a0] lg:left-36 lg:text-[80px]'>
                DREAM
            </p>
        </div>
      </>
      

    )
}

export default Logotipo_square