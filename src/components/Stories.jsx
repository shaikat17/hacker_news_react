import React from 'react'
import { useGlobalContext } from '../Context'

const Stories = () => {
    const { isLoading } = useGlobalContext()

    if(isLoading) return <div className="loading"></div>
    
  return (
    <div>Stories</div>
  )
}

export default Stories