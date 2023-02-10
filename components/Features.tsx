import React from 'react'
import { EditIcon } from './EditIcon'
import user_interaction from "@/assests/user_interaction.png"
import user_research from "@/assests/user_research.png"
import getting_skateholder from "@/assests/getting_skateholder.png"
import Image from 'next/image'

const features = [
    {
        id: 1,
        title: "User research",
        description: "Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam dieam earn magna bibendum imperdiet nullam orci pede.",
        image: user_interaction,
        middle: false
    },
    {
        id: 2,
        title: "Getting skateholder",
        description: "Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.",
        image: getting_skateholder,
        middle: true
    },
    {
        id: 3,
        title: "User interaction",
        description: "Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna.",
        image: user_research,
        middle: false
    }
]


export const Features = () => {
    return (
        <div className='mt-20'>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl text-[#074F63]'>Features</h1>
                <EditIcon />
            </div>
            <div className='mt-8 lg:ml-10'>
                {
                    features.map((feature) => (
                        <div key={feature.id} className="lg:relative">
                            {
                                feature.middle ?
                                    <div>
                                        <div className='md:relative lg:absolute lg:border-b-2 lg:border-b-[#7DA1AB] lg:top-[15%] lg:left-[15%] lg:w-2/3 lg:z-50'>
                                            <div className='bg-[#074F6380] w-max px-4 py-1 lg:w-full lg:text-center'>
                                                <p className='text-white text-2xl'>{feature.title}</p>
                                            </div>
                                            <div className='min-w-sm pl-12 my-6 font-semibold text-lg text-gray-400 md:absolute md:left-[45%] md:top-24 md:min-w-[60%] lg:static lg:left-0'>
                                                <p className='lg:pr-44'>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <Image src={feature.image} alt="img" className='lg:relative lg:left-[60%]' />
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <div className='md:relative lg:absolute lg:border-b-2 lg:border-b-[#7DA1AB] lg:top-[15%] lg:left-[15%] lg:w-2/3'>
                                            <div className='bg-[#074F6380] w-max px-4 py-1 lg:w-full lg:text-center'>
                                                <p className='text-white text-2xl'>{feature.title}</p>
                                            </div>
                                            <div className='min-w-sm pl-12 my-6 font-semibold text-lg md:absolute md:left-[45%] md:top-24 md:min-w-[60%] lg:static lg:left-0 text-gray-400'>
                                                <p className='lg:pl-40'>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={feature.image} alt="img" />
                                        </div>
                                    </>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}