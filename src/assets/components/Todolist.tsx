import { Todo } from "../types/todos";
import Todoitem from "./Todoitem";

interface TodolistProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}



export default function Todolist(
  {
    todos,
    onCompletedChange,
    onDelete
  } : TodolistProps
) {

  const todosSorted = todos.sort((a,b) => {
    if(a.completed === b.completed) {
      return b.id - a.id
    }

    return a.completed ? 1 : -1
  })

  return (

    <>
      <div className="space-y-2">
            {todosSorted.map(todo => (
              <p key={todo.id} className="text-lg">
                <Todoitem
                  key={todo.id}
                  todo={todo}
                  onCompletedChange={onCompletedChange}
                  onDelete={onDelete}
                
                ></Todoitem>
              </p>
              
            ))}
      </div>
      {todos.length == 0 &&
        <p className="text-center text-sm text-gray-500">
          No Todos in the List
        </p>
      }
    </>
  )
}