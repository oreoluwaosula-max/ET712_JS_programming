import './App.css';
import User from './user'

import woman from './images/woman.png'
import man from './images/man.png'
import boy from './images/boy.png'

import User_feedback from './user_feedback'

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Ore-Oluwa Osula</h1>
     
      <main className='container'>
        {/* user 1 */}
        <User_feedback username = "woman">
          <User image = {woman}  date = "10/15/26" msg = "Hello world"/>
          </User_feedback>
        
        {/* user 2 */}
        <User_feedback username = "man">
          <User image = {man}  date = "10/16/26" msg = "Hello world!"/>
          </User_feedback>
        
        {/* user 3 */}
        <User_feedback username = "boy">
          <User image = {boy}  date = "10/17/26" msg = "Hello world"/>
          </User_feedback>
      </main>

      {/** POST COMMENTS */}
      <section className="postcomment">
        <ul className="commentlist">
          <li>testing</li>
        </ul>
      </section>

    </div>
  );
}

export default App;
