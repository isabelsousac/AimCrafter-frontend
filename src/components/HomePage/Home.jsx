import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Api from '../../API/apis';


const Home = () => {
    const [crafts, setCrafts] = useState([])

    useEffect(() => {
        const fetchCrafts = async () => {
            const api = new Api()
            const retrievedCrafts = await api.fetchCrafts()
            console.log(retrievedCrafts)
            setCrafts(retrievedCrafts)
        }
        fetchCrafts();
    }, []);

    return (
        <div>
            <HomeHeader />
            <div className='container-home-craft'>
                {crafts.map((craft) => <CraftContainer key={craft.id} craft={craft} />)}
            </div>
        </div>
    )
}

export default Home;

const HomeHeader = () => {
    return (
        <header>
        </header>
    )
}

const CraftContainer = ({ craft }) => {
    return (
        <div>
            <Link 
            to={`/craft/${craft.id}`} 
            className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="img-home-craft object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={craft.image} alt={craft.title}/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{craft.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">By {craft.username}</p>
                    </div>
            </Link>
        </div>
    )
}
