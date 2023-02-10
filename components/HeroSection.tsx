"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { EditIcon } from './EditIcon'
import bg from "@/assests/bg.svg"
import ls1 from "@/assests/ls1.jpg"
import ls2 from "@/assests/ls2.jpg"
import { ProjectModal } from './modal'
import { ProjectTypes } from '@/types/project'
import { Carousel } from 'flowbite-react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const tagList: { id: number, name: string }[] = [
    { id: 1, name: '#solar_breeze' },
    { id: 2, name: '#red_hold' },
    { id: 3, name: '#card_guard' },
    { id: 4, name: '#tostring' },
    { id: 5, name: '#tough_joy_fax' },
    { id: 6, name: '#cardify' },
]
const defaultValue: ProjectTypes = {
    name: "Gembucket",
    keywords: tagList,
    summary: "Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio	feugiat non pretium quis lectus suspendisse.",
    websites: "https://gembucket.com",
    websites_types: "Official site"
}
export const HeroSection = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [project, setProject] = useState<ProjectTypes>(defaultValue)
    function setNewProject(values: ProjectTypes) {
        setProject((prev) => {
            return {
                ...prev,
                name: values.name,
                summary: values.summary,
                websites: values.websites,
                keywords: values.keywords
            }
        })
    }
    return (
        <>
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-4xl leading-none text-[#074F63]'>{project.name}</h1>
                    <EditIcon onClick={() => setOpen(true)} />
                </div>
                <div className='mt-2 flex flex-wrap gap-2'>
                    {
                        project.keywords.map((tag) => (
                            <p key={tag.id} className="text-sm leading-4 text-[#8FADB5] font-bold">{tag.name}</p>
                        ))
                    }
                </div>
                <div className='text-[#808080] mt-6'>
                    <p className='font-bold text-lg leading-5'>
                        {project.summary}
                    </p>
                    <p className='mt-3'>{project.websites_types}: {' '}<span><a className='text-[#18C4EE]' href={'https://gembucket.com'}>{project.websites}</a></span></p>
                </div>
                <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
                    <Carousel>
                        <Image src={bg} alt="slider" />
                        <Image src={ls1} alt="slider" />
                        <Image src={ls2} alt="slider" />
                    </Carousel>
                </div>
            </div>
            <ProjectModal open={open} setOpen={() => setOpen(false)} initValue={project} updateProject={setNewProject} />
            <ToastContainer />
        </>
    )
}
