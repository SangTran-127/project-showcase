import React from 'react'
import Image from 'next/image'
import pen from "@/assests/pen.png"
interface EditIconProps {
    onClick?: () => void
}
export const EditIcon = ({ onClick }: EditIconProps) => {
    return (
        <div className='rounded-full cursor-pointer bg-[#D2D2D266] w-10 h-10 flex justify-center items-center' onClick={onClick}>
            <Image src={pen} alt="pen" />
        </div>
    )
}
