import { v4 as uuidv4 } from "uuid";

const Data = [
  {
    id: uuidv4(),
    description: "This is the first task",
    isDone: false,
  },

  {
    id: uuidv4(),
    description: "This is the second task",
    isDone: false,
  },

  {
    id: uuidv4(),
    description: "This is the third task",
    isDone: false,
  },
];

export default Data;
