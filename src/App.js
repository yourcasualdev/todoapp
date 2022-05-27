import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <TaskList />
      <AddTask />
      <h1 className="text-center">Hello World</h1>
    </div>
  );
}

export default App;
