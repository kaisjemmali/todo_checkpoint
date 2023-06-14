import "./App.css";
import Addtask from "./Components/Addtask";
import ListTask from "./Components/ListTask";
import NavigationBar from "./Components/NavigationBar";
import { useSelector } from "react-redux";

function App() {
  const { tasks } = useSelector((state) => state.todoAdd);

  return (
    <div className="App">
      <NavigationBar />
      <br />
      <h2>Todo List</h2>
      <br />
      <Addtask />
      <br />
      <ListTask Data={tasks} />
    </div>
  );
}

export default App;
