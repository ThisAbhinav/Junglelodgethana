import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-center m-3'>
            <div className='flex flex-row justify-center items-center'>
                <div className='logo'></div>
                <div className='font-light text-6xl text-secondary2'>JUNGLE LODGE THANA</div>
            </div>
        </div>
        <div>
        <div className="flex flex-row justify-center font-light lg:gap-20 sm:gap-5 align-middle text-secondary2">
                <div className="box-a"><div className='custom-underline1'><a href="#">BOOK NOW</a></div></div>
                <div>|</div>
                <div className="box-a"><div className='custom-underline1'><a href="#">HOSHIARPUR ECO-TOURISM</a></div></div>
                <div>|</div>
                <div className="box-a"><div className='custom-underline1'><a href="https://itinerarygen.streamlit.app/">ITINEARY GENERATOR</a></div></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar