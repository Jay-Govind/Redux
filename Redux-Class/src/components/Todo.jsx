import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { markAsDone, deleteTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  let dispatch = useDispatch();
  console.log(todos);

  let deleteHandle = (id) => {
    dispatch(deleteTodo(id));
  };

  let markAsDoneHandle = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h1>Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* <span
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.task}
            </span> */}
             {todo.task}
            <button onClick={() => deleteHandle(todo.id)}>Delete</button>
            <button onClick={() => markAsDoneHandle(todo.id)}>Mark</button>
          </li>
        ))}
      </ul>
    </>
  );
}
