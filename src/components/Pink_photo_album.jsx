import '../../src/App.css';
import { viewTotes }  from '../api/images.js' 
import ToteDialogue from './ToteDialogue';
import { useRef, useEffect, useState } from 'react';

const items = new Array(10).fill("value");

function Pink_photo_album() {
    const dialogRef = useRef();
    const [loading, setLoading] = useState(true); // State to track loading
    const [data, setData] = useState(null); // State to store data
    const [selectedTote, setSelectedTote] = useState();

    const showDialog = (item) => {
        if (dialogRef.current) {
            setSelectedTote(item);
            dialogRef.current.toggleDialog();
        } else {
            console.error("dialogRef is undefined");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await viewTotes();
                setData(fetchedData); 
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    return (
        <>
         <div className="bg-TD-BigSquarePink p-9 rounded-[10px] flex flex-wrap justify-around gap-6 lg:ml-8 lg:mt-0 lg:max-h-[90vh] lg:overflow-y-auto scrollbar-custom">
            {loading ? (
                <>
                  {items.map((item, i) => (
                      <div 
                        key={i} 
                        className="h-[230px] w-[230px] bg-TD-DarkSquarePink rounded-[10px] shrink-0  animate-pulse " 
                        >
                      </div>
   ))}
                </>
            ) : (
                <>
                    {data.map((item, i) => (
                        <div
                                key={i}
                                className="h-[230px] w-[230px] flex bg-TD-DarkSquarePink rounded-[10px] shrink-0 hover:cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => showDialog(item)}
                            >
                                <img src={item.url} className='h-[200px] w-[200px] rounded-[10px] shrink-0 self-center m-auto '/>

                            </div>
                        ))}
                 <ToteDialogue ref={dialogRef} data={selectedTote} />
                </>
            )}
         </div>
        </>
    );

}

export default Pink_photo_album;

{items.map((item, i) => (
    <div key={i} className="h-[230px] w-[230px] bg-TD-DarkSquarePink rounded-[10px] shrink-0  hover:scale-105 transition-transform duration-300" 
    onClick={() => showDialog() }>
    </div>
   ))}
