import React from 'react'
import './App.css'
import ModalWindow from './Modal_window'

const User_feedback = function(props){
    // function to open the feedback window
    const openmodalWindow = ()=>{
        const modalwindow = document.querySelector(".modalwindow")
        
    

    //set username for modal window when the feedback is clicked
    const modalusename = document.querySelector('.modalusername')
    modalusename.innerHTML = `for <i>${props.username}</i>`

    modalwindow.style.display = "block"
    }

    return(
        <>
            <div className= "feedbackcontainer">
                <section className= "feedbackcard">
                    <div className="content">
                        <p>{props.username}</p>
                </div>

                <div className="description">
                    {props.children}
                </div>

                <div className = "cardfooter" onClick={openmodalWindow}>
                    <p>
                        <span>&#10011;</span>
                        Add Feedback
                    </p>
                </div>
                </section>
            </div>

            {/**MODAL WINDOW */}
            <ModalWindow />
        </>
    )
}
export default User_feedback