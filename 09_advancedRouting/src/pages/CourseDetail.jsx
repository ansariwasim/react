import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetail() {

    const params = useParams()
    console.log(params)

  return (
    <div>
        <h2> <span className='text-red-800'>{params.id} </span> Course Detail page</h2>
    </div>
  )
}

export default CourseDetail