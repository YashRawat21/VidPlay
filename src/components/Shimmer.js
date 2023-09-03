const Shimmer = () => {
    return(
      
        <div className = 'flex flex-wrap'>
          
         {
             Array.from({length:21}).map((el) => {
                 return(
                     <div className="p-2 m-2 w-[300px] h-60 rounded-lg shadow-lg ml-11 bg-gray-200"></div>
                     )
                    })
                }
        </div>
               
    )
}
export default Shimmer;

