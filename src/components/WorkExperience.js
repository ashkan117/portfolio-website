import React from 'react'
import Bullet from "./Bullet.js";
import data from '../data/professionalExperience.json'

const WorkExperience = () => {
    console.log(data)
    return (
        <div>
        {data.map((item) => (
            <Bullet 
                company = {item.company} 
                position = {item.position}
                items = {item.items}
                date = {item.date} />
        ))}
        </div>
    )
}

export default WorkExperience;
