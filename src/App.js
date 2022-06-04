import { TaskList, AddTask, Navbar } from './components';
import { useThemeContext } from './context/themeContext';

function App() {
  const { theme } = useThemeContext();
  return (
    <div data-theme={theme}>
      <Navbar />
      <div className=" min-h-screen">
        <TaskList />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
