import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Todo-List</h1>
      <form>
        <input type="text" placeholder='Enter a todo' style={{
          width: 350,
          padding: 10,
          borderRadius: 20,
          border: "none",
          fontSize: 20,
        }} />
        <button style={{
          padding: 12,
          borderRadius: 25,
          fontSize: 15,
          marginLeft: 20,
        }} type='submit'>Submit</button>
      </form>
      <ul className='allTodos'>
        <li className='singleTodo'>
          <span classNmae= "todoText">First Todo</span>
          <button style={{
            borderRadius: 25,
            padiing: 10,
            border: "1px solid white",
            color: "white",
            backgroundColor: "orange"
          }}>Delete</button>
        </li>
      </ul>
      </header>
         
    </div>
  );
}

export default App;
