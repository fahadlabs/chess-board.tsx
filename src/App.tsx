import './App.css';

const board: boolean[][] = Array(8)
  .fill(0)
  .map((_, i) =>
    Array(8)
      .fill(0)
      .map((_, j) => i % 2 === j % 2)
  );

function App() {
  return (
    <div className='App'>
      <div className='box'>
        {board.map((row, i) => (
          <div key={i} className='row'>
            {row.map((val, j) => (
              <div key={j} className={`item ${val ? 'white' : 'black'}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
