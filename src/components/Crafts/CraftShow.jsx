import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../../API/apis.js'



const CraftShow = (props) => {
    const context = props.value;
    const [craft, setCraft] = useState({
        title: null,
        tools: null,
        description: null,
        timeToCreate: null,
        difficultyLevel: null,
        image: null,
        username: null,
        createdAt: null
    })

    const [comments, setComments] = useState(false)

    const _showComments = () => {
        setComments(!comments);
    }

    const { craftId } = useParams();

    useEffect(() => {
        const fetchCraft = async () => {
            const api = new Api()
            const craft = await api.showCraft(craftId)
            setCraft({
                title: craft.title,
                tools: craft.tools,
                description: craft.description,
                timeToCreate: craft.timeToCreate,
                difficultyLevel: craft.difficultyLevel,
                image: craft.image,
                username: craft.username,
                createdAt: new Date(craft.createdAt * 1000)
            })
        }
        fetchCraft();
    }, []);

    return (
        <div className="show-craft-container max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            {craft.title === null ? (

                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                    <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div>
                    <img className="rounded-t-lg" src={craft.image} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{craft.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">By {craft.username}</p>
                        <div>
                            {craft.timeToCreate ? <p className="col-span-2">{craft.timeToCreate}</p> : ""}
                            {craft.difficultyLevel ? <p className="col-span-2">Level of difficulty: {craft.difficultyLevel}</p> : ""}
                            {craft.createdAt ? <p className="col-span-2">{craft.createdAt.toLocaleString().split(',')[0]}</p> : ""}
                        </div>
                    </div>

                    <div className="text-center">
                        <button onClick={_showComments} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
                            Recreations
                        </button>
                    </div>

                    {comments ?

                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ml-6">
                                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                </span>
                                <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                                    <div className="text-sm font-normal text-gray-500 dark:text-gray-300">I can't wait to recreate it. Also, check the craft I made yesterday  to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
                                </div>
                            </li>
                        </ol>
                        : ""}
                </div>

            )
            }
        </div>
    )
}

// I WONT NEED DESCRIPTION IF I DONT USE MAP AND CREATE THE BELLOW COMPONENT

// const CraftItemDescription = (props) => {
//     return (
//         <div>
//             hey {props.item}
//         </div>
//     )
// }

export default CraftShow