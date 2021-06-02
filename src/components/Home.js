import React from 'react'
import {
    Link
} from 'react-router-dom';
import '../styles/home.scss'

const Home = () => {
    return (
        <div className="background">
            <h1> Ashkan Faghihi </h1> 
            <nav>
                <ul className = "links">
                    <li key = "1">
                        <Link to="work-experience">Work Experience</Link>
                    </li>
                    <li key = "2">
                            <Link to="project-experience">Project Experience</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}


export default Home;
