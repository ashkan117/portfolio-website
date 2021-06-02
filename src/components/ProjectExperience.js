import React, {useState} from 'react'
import "../styles/bullet.scss";
import data from '../data/projectExperience'
import Bullet from '../components/Bullet'
import "../styles/tablist.scss"


const ProjectExperience = () => {
    const [index,setIndex] = useState(0);
    return (
            <div className="experience-container">
                <div className="company-tablist">
                    { data.map((item,i) => {
                        if (item.company === data[index].company) {
                            return <button className="selected-experience-button" onClick={() => setIndex(i)}> {item.company} </button>
                        }
                        else {
                            return <button className="unselected-experience-button" onClick={() => setIndex(i)}> {item.company} </button>
                        }
                    }) }
                </div>
                <div className="tablist-experience">
                    { 
                        (<Bullet 
                                position = {data[index].position}
                                items = {data[index].items}
                                date = {data[index].date} />
                                
                    )}
                </div>
            </div>
           )

}

export default ProjectExperience;
