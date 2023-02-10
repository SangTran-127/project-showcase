
import React, { useState } from 'react'
import { Modal, TextInput } from 'flowbite-react'
import { useFormik, FormikProps } from 'formik'
import { ProjectTypes } from '@/types/project'
import { errorHelper, showToast } from '@/utils/tool'
import Badge from '../utils/Badge'
import { DescriptionTypes } from '@/types/description'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

interface DescriptionModalProps {
    open: boolean,
    setOpen: () => void,
    initValue: string[]
    updateDescription: (values: string) => void
}

export const DescriptionModal = (props: DescriptionModalProps) => {
    const [desc, setDesc] = useState<string>(" ");
    return (
        <Modal show={props.open} onClose={props.setOpen}>
            <Modal.Header>
                Description
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <ReactQuill theme="snow" value={desc} onChange={setDesc} />
                </div>
                <Modal.Footer>
                    <div className='w-full flex justify-end gap-3'>
                        <button onClick={() => props.setOpen()}>Cancel</button>
                        <button className='text-white bg-[#18C4EE] px-5 py-2 rounded-lg' type='submit' onClick={() => {
                            props.updateDescription(desc)
                            props.setOpen()
                            showToast("success", "Updated successfully 😁")

                        }}>Save</button>
                    </div>
                </Modal.Footer>

            </Modal.Body >

        </Modal >

    )
}

