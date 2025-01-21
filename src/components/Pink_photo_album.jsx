import '../../src/App.css';
import { viewTotes }  from '../api/images.js' 
import ToteDialogue from './ToteDialogue';
import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

const items = new Array(10).fill("value");

function Pink_photo_album() {
    const [loading, setLoading] = useState(true); // State to track loading
    const [data, setData] = useState(null); // State to store data
    const [selectedTote, setSelectedTote] = useState();

    //State to control modal
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = (item) => {
        setSelectedTote(item);
        setModalOpen(true);

    };

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
                                className="h-[230px] w-[230px] 2xl:h-[500px] 2xl:w-[500px] flex bg-TD-DarkSquarePink rounded-[10px] shrink-0 hover:cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => (modalOpen ? close() : open(item))}
                            >
                                <img src={item.url} className='h-[200px] w-[200px] 2xl:h-[450px] 2xl:w-[450px] rounded-[10px] shrink-0 self-center m-auto '/>

                            </div>
                        ))}
                        <AnimatePresence
                         initial={false}
                         exitBeforeEnter={true}
                         onExitComplete={() => null}>
                            {modalOpen && <ToteDialogue data={selectedTote} handleClose={close} />
                        }
                        </AnimatePresence>
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
