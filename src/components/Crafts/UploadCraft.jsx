import React, { useState } from "react";
import Api from '../../API/apis.js'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import _ from 'underscore';

const UploadCraft = () => {
    const navigate = useNavigate();
    const [craftInfo, setCraftInfo] = useState({
        title: "",
        // tools: new Set(),
        description: "",
        minutesToCreate: "",
        difficultyLevel: 0,
        image: ""
    });

    const [tools, setTools] = useState([])
    const [signUpRequired, setSignUpRequired] = useState(false);

    const _handleChange = (name, value) => {
        setCraftInfo({
            ...craftInfo,
            [name]: value,
        });
    }

    const _handleCheckbox = (e) => {
        console.log(e)
        if (e.target.checked) {
            setTools((current) => {
                return _.unique([...current, e.target.value])
            })
        } else {
            setTools((current) => {
                return _.filter(current, it => it !== e.target.value)
            })
        }
    }

    const onCraftNotCreated = (error) => {
        console.log(error);
    }

    const onCraftCreated = (message) => {
        console.log(message);
        navigate("/") // change fot the craft page
    }

    const _handleSubmit = (e) => {
        e.preventDefault();
        if (!localStorage.token) {
            setSignUpRequired(true);
            return
        }

        const craft = {
            title: craftInfo.title,
            description: craftInfo.description,
            minutesToCreate: parseInt(craftInfo.minutesToCreate),
            difficultyLevel: parseInt(craftInfo.difficultyLevel),
            image: craftInfo.image,
            tools: tools
        }

        const api = new Api(localStorage.token);
        api.createCraft(craft, onCraftNotCreated, onCraftCreated);
    }

    return (
        <form className="upload-craft-form" onSubmit={_handleSubmit}>
            {signUpRequired ?
                <div id="alert-4" className="flex p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <div className="ml-3 text-sm font-medium text-yellow-700 dark:text-yellow-800">
                        Please, sign in <Link to="/signin" className="font-semibold underline hover:text-yellow-800 dark:hover:text-yellow-900">here</Link> first.
                    </div>
                    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-yellow-100 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300" data-dismiss-target="#alert-4" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                : ""
            }
            <h3>New craft</h3>
            <div className="upload-craft-container grid gap-6 mb-6 md:grid-cols-2">
                <div className="label-parents">
                    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Give your craft a title</label>
                    <input
                        name="title"
                        value={craftInfo.title}
                        onChange={({ target }) => {
                            _handleChange(target.name, target.value);
                        }}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Christmas card"
                        required />
                </div>
                {/* I can include description here */}
                <div className="label-parents">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From 0 to 10, how difficult was it? (selected:{craftInfo.difficultyLevel})</label>
                    <input
                        type="range"
                        min="0" max="10" step="1"
                        name="difficultyLevel"
                        value={craftInfo.difficultyLevel}
                        onChange={({ target }) => {
                            _handleChange(target.name, target.value);
                        }}
                        className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                        required
                    />
                </div>
                <div className="label-parents">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create a link to your craft image and paste it here</label>
                    <input
                        name="image"
                        value={craftInfo.image}
                        onChange={({ target }) => {
                            _handleChange(target.name, target.value);
                        }}
                        type="url"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
                <div className="label-parents">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Please, tick all the tools you made use</label>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input
                                    name="tools"
                                    onClick={_handleCheckbox}
                                    type="checkbox"
                                    value="Paper"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Paper</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input
                                    name="tools"
                                    onClick={_handleCheckbox}
                                    type="checkbox"
                                    value="Scissors"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Scissor</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input
                                    name="tools"
                                    onClick={_handleCheckbox}
                                    type="checkbox"
                                    value="Brush pen"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Brush pen</label>
                            </div>
                        </li>
                        <li className="w-full dark:border-gray-600">
                            <div className="flex items-center pl-3">
                                <input
                                    name="tools"
                                    onClick={_handleCheckbox}
                                    type="checkbox"
                                    value="Watercolor"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Watercolor</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="label-parents">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How long have you spent to create it? (in minutes)</label>
                    <input
                        name="minutesToCreate"
                        value={craftInfo.minutesToCreate}
                        onChange={({ target }) => {
                            _handleChange(target.name, target.value);
                        }}
                        type="number"
                        min="1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

            </div>
            <button type="submit" className="upload-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
        </form>
    )
}

export default UploadCraft