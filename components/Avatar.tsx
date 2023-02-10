import React from 'react'
import Image from 'next/image'
import avt from "@/assests/avatar.png"
const Avatar = () => {
    return (
        <div className='flex items-center gap-2 w-full '>
            <div>
                <Image src={avt} alt="" />
            </div>
            <div className='flex flex-col justify-between'>
                <h3 className='text-[#074F63] text-xl font-normal'>Pattie Trusdale</h3>
                <h5 className='text-lg leading-5 text-[#808080]'>Full-stack Developer</h5>
            </div>
        </div>
    )
}

export default Avatar