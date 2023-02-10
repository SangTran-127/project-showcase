"use client"
import React, { useState } from 'react'
import { EditIcon } from './EditIcon'
import { DescriptionModal } from './modal/DescriptionModal'
import { ToastContainer } from 'react-toastify'

export const Description = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [descriptions, setDescriptions] = useState<Array<string>>([
        '<li>Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand praesent blandit lacinia erat vestibulum sed.</li>',
        '<li>Liam neque vestibulum eget vulputate ut ultrices vel.</li>',
        '<li>Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</li>'
    ])
    const setNewDescriptions = (desc: string) => {
        setDescriptions(prev => [...prev, desc])
    }
    return (
        <>
            <div className='mt-20'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-4xl text-[#074F63]'>Description</h1>
                    <EditIcon onClick={() => setOpen(true)} />
                </div>
                <div className='mt-3 px-5'>
                    <ul className='list-disc'>
                        {descriptions.map((desc, index) => {
                            return <li key={index} dangerouslySetInnerHTML={{
                                __html: desc
                            }} />
                        }
                        )}
                    </ul>
                </div>
            </div>
            <DescriptionModal open={open} setOpen={() => setOpen(false)} initValue={descriptions} updateDescription={setNewDescriptions} />
            <ToastContainer />
        </>
    )
}

