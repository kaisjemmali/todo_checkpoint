import "./App.css";
import Addtask from "./Components/Addtask";
import FilterTasks from "./Components/FilterTasks";
import ListTask from "./Components/ListTask";
import NavigationBar from "./Components/NavigationBar";
import { useSelector } from "react-redux";

function App() {
  const { tasks } = useSelector((state) => state.todoAdd);
  const { Filter } = useSelector((state) => state.todoAdd);

  return (
    <div className="App">
      <NavigationBar />
      <br />
      <FilterTasks />
      <br />
      <Addtask />

      <ListTask
        Data={
          Filter === "Done"
            ? tasks.filter((el) => el.isDone === true)
            : Filter === "Undone"
            ? tasks.filter((el) => el.isDone === false)
            : tasks
        }
      />
    </div>
  );
}

export default App;
