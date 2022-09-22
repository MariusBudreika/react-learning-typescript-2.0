import "./App.css";
import Todo from "./components/models/todo";
import Todos from "./components/Todos";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Ts")];

  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
