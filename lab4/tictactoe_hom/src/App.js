import './App.css';
import {useState} from 'react';

function Square() {
  //use state
  const [value, setValue] = useState(null);
  //click function
  function handleClick(){
    console.log(`clicked!`);
  }
  return(
    <button className="square" onClick={handleClick}>
      
    </button>
  );
}


function App(){
  return(
   
        <div>
          <h1 className='title'>Tic Tac Toe by Nang Shen Hom</h1>
          <div className='boardcontainer'>
            <div className="board-row">
              <Square  />
              <Square />
              <Square />
            </div>
            <div className="board-row">
              <Square />
              <Square />
              <Square />
            </div>
            <div className="board-row">
              <Square />
              <Square />
              <Square/>
            </div>
          </div>
        </div>
  );
}
  

  
  


export default App;

