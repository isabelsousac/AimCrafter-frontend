import React from "react";

const UploadCraft = () => {
    return (
        <div className="upload-craft-container">
            <div className="upload-form-img"></div>
            <div className="upload-form">
                <h1>New Craft Post</h1>
                <form>
                    <div class="row">
                        <div class="col">
                            <label>Give your craft a title</label>
                            <input 
                            required 
                            type="text" 
                            class="form-control" 
                            placeholder="Christmas card"/>
                        </div>
                        <div class="col">
                            <label>How long have you spent to create it?</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="10 min"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label>How difficult was it?</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Easy"/>
                        </div>
                        <div class="col">
                            <label>Create a link to your craft image and paste it here</label>
                            <input 
                            type="text" 
                            class="form-control" />
                        </div>
                    </div>

                    <div class="row">
                        <p>Please, tick all tools that you have used</p>
                        <div class="col">
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Scissors, paper, pen"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadCraft

// title = craftCreated.title,
//             tools = craftCreated.tools,
//             description = craftCreated.description,
//             timeToCreate = craftCreated.timeToCreate,
//             difficultyLevel = craftCreated.difficultyLevel,
//             image = craftCreated.image,
//             username = craftCreated.username,
//             createdAt = craftCreated.createdAt