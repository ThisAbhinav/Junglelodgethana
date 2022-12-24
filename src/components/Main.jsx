import React from 'react'
const Main = () => {
  return (
    <div>
      <div className='w-[90%] flex flex-row gap-2 mt-5 mx-auto'>
        <div className='bg-[url("./assets/images/2.png")] bg-center bg-cover w-[45%] h-[38vh]'></div>
        <div className='bg-[url("./assets/images/5.jpg")] bg-center bg-cover grow w-[45%] h-[38vh]'></div>
      </div>

      <div className='w-[90%] flex flex-row gap-2 mt-2 mx-auto'>
      <div className='bg-[url("./assets/images/6.jpg")] bg-center bg-cover w-[50vh] h-[28vh] '></div>
        <div className='bg-[url("./assets/images/4.jpg")] bg-center bg-cover grow w-[40vh] h-[28vh]'></div>
        <div className='bg-[url("./assets/images/1.png")] bg-center bg-cover w-[60vh] h-[28vh]'></div>
        <div className='bg-[url("./assets/images/7.jpg")] bg-center bg-cover w-[20vh] h-[28vh]'></div>
      </div>
  </div>
  )
}

export default Main