import { TaskList, AddTask, Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen">
        <TaskList />
        <AddTask />
      </div>
    </>
  );
}

export default App;
