import React from 'react'
import Image from 'next/image'

import back from "@/assests/back.png"
import Avatar from '../Avatar'



export const Header = () => {
    return (
        <nav className='max-w-sm lg:max-w-full mt-5'>
            <div className='flex gap-36 lg:gap-0 items-center'>
                <div className='w-1/2 lg:max-w-max'>
                    <div className=''>
                        <Image src={back} alt="back" />
                    </div>
                </div>
                <div className='hidden lg:block lg:max-w-max lg:ml-4'>
                    <Avatar />
                </div>
                <div className='w-1/2 lg:max-w-max ml-4'>
                    <div className='rounded-3xl bg-[#D93F1D] w-32 h-8 flex justify-center items-center align-middle'>
                        <p className='text-white leading-6 block text-center '>HIRE</p>
                    </div>
                </div>
            </div>
            <div className='lg:invisible'>
                <Avatar />
            </div>
        </nav>
    )
}
