import './App.css';
import User from './user';

import women from './images/woman.png';
import men from './images/man.png';
import boy from './images/boy.png';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Ore-Oluwa Osula</h1>
      <main className='container'>
        {/* user 1 */}
        <User image={women} username="Women" date="10/15/26" msg="Hello there!" /> 
        {/* user 2 */}
        <User image={men} username="Men" date="10/16/26" msg="Hello there!" />
        {/* user 3 */}
        <User image={boy} username="Boy" date="10/17/26" msg="Hello there!" />
      </main>
    </div>
  );
}

export default App;
