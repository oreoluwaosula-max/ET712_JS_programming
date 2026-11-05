import React from 'react'
import imgpinkflower from '../images/pinkflower.jpg'

const Home = function () {
    return( <>
         <header className ="header"> 
             <h1 className="headertitle">Home</h1>
            </header>

          <main className="maincontainer">
                <div>
                    <img src ={imgpinkflower} />
                 </div>
            </main>
        </>)
}

export default Home