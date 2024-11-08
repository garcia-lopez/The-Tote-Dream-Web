import Logotipo_square from './components/Logotipo_square';
import Pink_photo_album from './components/Pink_photo_album';
import Small_squares from './components/Small_squares';

function App() {
  return (
    <>
      <div className='flex flex-wrap p-9 gap-4 overflow-hidden justify-center lg:grid lg:grid-cols-2 lg:mx-auto' > 
           <div className='flex flex-wrap justify-center gap-4 lg:flex-col lg:items-center '>
              <Logotipo_square></Logotipo_square>
              <Small_squares></Small_squares>
           </div>
         <Pink_photo_album></Pink_photo_album>
       </div>
    </>
  )
}

export default App
