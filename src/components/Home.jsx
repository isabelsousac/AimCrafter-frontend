import React, { useState } from 'react';
import NavApp from './NavApp.jsx';
// import {Link, useNavigate} from 'react-router-dom';


const Home = () => {
    const [crafts, setCrafts] = useState([
        {
            title: "aa",
            description: "bb",
            difficultyLevel: null,
            image: "./header.png",
            username: "cc",
        }
    ])

    return (
        <div>
            <NavApp />
            <HomeHeader />

            <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>

            {/* {crafts.map((craft) => {
                return (
                    <div>
                        <CraftContainer craft={craft}/>
                    </div>
                )
            })} */}
        </div>
    )
}

export default Home;

const HomeHeader = () => {
    return (
        <header>
            <img className='header-img' src={"./header.png"} alt="header" />
            <h2>-- Stay inspired --</h2>
        </header>
    )
}

const CraftContainer = ({ title, description, difficultyLevel, image, username }) => {
    return (
        <>
            <img src={image} alt={title} />
            <div>
                <p>{description}</p>
                <p>{username}</p>
                {difficultyLevel ? <p>difficultyLevel</p> : ""}
            </div>

        </>
    )
}