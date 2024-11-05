function Small_squares() {
    return (
        <>
            <div className='bg-TD-LightPink h-fit w-fit flex flex-wrap justify-center gap-2 p-4 rounded-[10px] lg:grid lg:grid-cols-2 lg:w-fit lg:p-6 lg:gap-4'>
               <div className="h-[150px] w-[150px] lg:h-[160px] lg:w-[160px] bg-TD-DarkSquarePink rounded-[10px] shrink-0 "></div>
               <div className="h-[150px] w-[150px] lg:h-[160px] lg:w-[160px] bg-TD-SquarePink rounded-[10px] shrink-0 "></div>
               <div className="h-[150px] w-[150px] lg:h-[160px] lg:w-[160px] bg-TD-SquarePink rounded-[10px] shrink-0 "></div>
               <div className="h-[150px] w-[150px] lg:h-[160px] lg:w-[160px] bg-TD-DarkSquarePink rounded-[10px] shrink-0 "></div>
            </div>
        </>
    )
}

export default Small_squares;