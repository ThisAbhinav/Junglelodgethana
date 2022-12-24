import React from 'react'

const Contact = () => {
    return (
        <div className="mb-28">
            <div className="box-c mb-8"><div className='flex justify-center font-light text-xl text-secondary2 mt-16 mb-12 custom-underline'>CONTACT US</div></div>
            <div className='flex'>
                <div className="mapouter mb-10 basis-4/6 ">
                    <iframe className=" h-[60vh] w-[80%] mx-auto bg-none overflow-hidden" src="https://maps.google.com/maps?q=jungle%20lodge%20thana,%20hoshiarpur&t=&z=15&ie=UTF8&iwloc=&output=embed" ></iframe>
                </div>
                <div className='flex flex-col gap-5 basis-2/6'>
                    <div className='font-light text-md text-secondary2'>Email- junglelodgethana@gmail.com</div>
                    <div className='font-light text-md text-secondary2'>Phone- 094646 55141</div>
                    <div className='font-light text-md text-secondary2'>Address- Jungle Lodge Thana, <div className='ml-[78px]'>Thana Dam Manhote,<br/>Punjab 144213,<br/>India</div></div>
                </div>
            </div>
        </div>
    )
}

export default Contact