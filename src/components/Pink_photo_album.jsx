const items = new Array(18).fill("value");

function Pink_photo_album() {
    return (
        <>
         <div className="bg-TD-BigSquarePink p-9 rounded-[10px] flex flex-wrap justify-around gap-4 lg:mt-0 lg:max-h-[90vh] lg:overflow-y-auto">
             {items.map((item, i) => (
              <div key={i} className="h-[230px] w-[230px] bg-TD-DarkSquarePink rounded-[10px] shrink-0 ">
              </div>
             ))}
         </div>
        </>
    )
}

export default Pink_photo_album