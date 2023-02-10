import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className='container mx-auto px-5 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>{children}</div>
    )
}
