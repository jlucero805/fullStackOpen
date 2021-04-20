import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    return (
        <div>
            <Header text={course.name}/>
            <Content parts={course.parts}/>
            <Total text={`total of ${course.parts.reduce((sum, p) => sum + p.exercises, 0)} exercises`}/>
        </div>
    )
}

export default Course