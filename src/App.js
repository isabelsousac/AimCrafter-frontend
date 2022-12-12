import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [craft, setCraft] = useState(null);

    useEffect(() => {
        async function getCraft() {
            const response = await fetch('http://localhost:8080/craft/9');
            const body = await response.json();
            setCraft(body.title)
            setIsLoading(false)
        }
        getCraft()
    }, [])

    if (isLoading) return <div>Loading...</div>   

    return (
        <div className="App">
            <h2>Craft title</h2>
            <p>{craft}</p>
        </div>
    )
}

export default App;