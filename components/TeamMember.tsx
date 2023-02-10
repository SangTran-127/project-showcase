import React from 'react'
import p1 from "@/assests/p1.png"
import p2 from "@/assests/p2.png"
import p3 from "@/assests/p3.png"
import p4 from "@/assests/p4.png"
import Image from 'next/image'


const members = [
    {
        id: 1,
        image: p1,
    },
    {
        id: 2,
        image: p2
    },
    {
        id: 3,
        image: p3
    },
    {
        id: 4,
        image: p4
    }
]

export const TeamMember = () => {
    return (
        <div className='mt-24'>
            <div className='mb-12'>
                <h1 className='text-4xl leading-none text-[#074F63]'>Team-members</h1>
            </div>
            <div className='lg:ml-10'>
                <div className='max-w-3xl grid md:grid-cols-2 gap-y-12 md:gap-y-24'>
                    {
                        members.map((member) => (
                            <Image key={member.id} src={member.image} alt={String(member.id) || " "} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
