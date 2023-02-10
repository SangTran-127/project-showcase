
import React, { useState } from 'react'
import { Modal, TextInput } from 'flowbite-react'
import { useFormik, FormikProps } from 'formik'
import { ProjectTypes } from '@/types/project'
import { errorHelper, showToast } from '@/utils/tool'
import Badge from '../utils/Badge'
interface ProjectModalProps {
    open: boolean,
    setOpen: () => void,
    initValue: ProjectTypes
    updateProject: (values: ProjectTypes) => void
}

export const ProjectModal = (props: ProjectModalProps) => {
    const [listTag, setListTag] = useState<{ id: number; name: string }[]>(props.initValue.keywords)
    const formik: FormikProps<ProjectTypes> = useFormik<ProjectTypes>({
        initialValues: props.initValue,
        onSubmit: (values) => {
            props.setOpen()
            values.keywords = listTag
            props.updateProject(values)
            showToast("success", "Updated successfully 😁")
        }
    })
    function handleDeleteTag(id: number) {
        const newList = listTag.filter((tag) => tag.id !== id)
        setListTag(newList)
    }
    return (

        <Modal show={props.open} onClose={props.setOpen}>
            <Modal.Header>
                Project
            </Modal.Header>
            <Modal.Body>

                <div className="space-y-6">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <p>Name: </p>
                            <TextInput
                                className='w-full'
                                type="text"
                                {...formik.getFieldProps('name')}
                                {...errorHelper(formik, 'name')}
                            />
                        </div>
                        <div className='mt-3'>
                            <p>Keywords:</p>
                            <TextInput
                                className='w-full'
                                type="text"
                            />
                            <div className='flex flex-wrap gap-3 mt-3'>
                                {
                                    listTag.map((key) => (
                                        <div key={key.id}>
                                            <Badge content={key.name} handleClick={() => handleDeleteTag(key.id)} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='mt-6'>
                            <p>Summary</p>
                            <textarea
                                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."'
                                {...formik.getFieldProps('summary')}
                                {...errorHelper(formik, 'summary')}
                                cols={40} rows={5}
                            />
                        </div>
                        <div className='flex gap-1 items-end justify-between'>
                            <div className='w-3/4'>
                                <p>Websites</p>
                                <TextInput
                                    className='w-full'
                                    type="text"
                                    {...formik.getFieldProps('websites')}
                                    {...errorHelper(formik, 'websites')}
                                />
                            </div>
                            <div>

                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Official site</option>
                                    <option value="US">Another site</option>

                                </select>
                            </div>
                        </div>
                        <Modal.Footer>
                            <div className='w-full flex justify-end gap-3'>
                                <button>Cancel</button>
                                <button className='text-white bg-[#18C4EE] px-5 py-2 rounded-lg' type='submit'>Save</button>
                            </div>
                        </Modal.Footer>


                    </form>
                </div>
            </Modal.Body>

        </Modal >

    )
}

