import './App.css';
import {useState} from 'react';

function Square({value, onSquareClick}) {
 
  
  return(
   
    <button className="square" onClick={onSquareClick}>
      {value}
      
    </button>
  );
}


function App(){
  
  //change state from X to O
  const [xlsNext, setXisNext] = useState(true);
  //setState
  const[squares, setSquares ] = useState(Array(9).fill(null));
  // const squares = [null, null, null, null, null, null, null, null, null];
  // squares[0] = 'X';


  //function update the squares array hoilding your App's state
  function handleClick(i){
    // const nextSquares =squares.slice();
    //condtion to lock the each cell once it's clicked
    if (squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    //condition to change state
    if (xlsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // nextSquares[3] = "X";
    setSquares(nextSquares);
    setXisNext(!xlsNext);

  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xlsNext ? "X" : "O");
  }


  return(
   
        <div>
          <h1 className='title'>Tic Tac Toe by Nang Shen Hom</h1>
          <div className='boardcontainer'>
            <div className='status'>{status}</div>
            <div className="board-row">
              <Square value={squares[0]} onSquareClick={()=>handleClick(0) }/>
              <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
              <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
              <Square value={squares[3]} onSquareClick={()=>handleClick(3) }/>
              <Square value={squares[4]} onSquareClick={()=>handleClick(4) }/>
              <Square value={squares[5]} onSquareClick={()=>handleClick(5) }/>
            </div>
            <div className="board-row">
              <Square value={squares[6]} onSquareClick={()=>handleClick(6) }/>
              <Square value={squares[7]}onSquareClick={()=>handleClick(7) }/>
              <Square value={squares[8]} onSquareClick={()=>handleClick(8) }/>
            </div>
          </div>
        </div>
  );
}
  
// function to calculate the points for each X and O
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

  
  


export default App;

