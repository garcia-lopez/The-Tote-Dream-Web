import '../../src/App.css';
import leafVector from '../../src/assets/leaf_vector.svg';

function Logotipo_square() {
    return (
        <>
        <div className='bg-white w-full min-h-[200px] rounded-[80px] overflow-hidden sm:w-[500px] sm:h-[250px] sm:pt-9 sm:rounded-[80px] container'>
          <div className='grid justify-items-start sm:justify-items-start'>
            <p className='font_logotipo'>The tote</p>
            <img src={leafVector} alt="Description of image" className='leaf' />
            <p className='font_dream'>DREAM</p>
          </div>
        </div>
      </>
      

    )
}

export default Logotipo_square