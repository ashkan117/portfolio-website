import React from 'react'
import "../styles/bullet.scss";

const Bullet = ({position,company,items,date}) => {
    return (
        <div className = "container">
            <div className = "header" >
                <h2 className="position"> {position} </h2>
                <h3 className="date"> {date} </h3>
            </div>
            <div> 
                <ul>
                    {
                        items.map((item) => (
                            <li key = {company}> {item} </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Bullet;
