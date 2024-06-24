import { Trash2 } from "lucide-react";
import { Todo } from "../types/todos"


interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id:number) => void;
}

export default function Todoitem({todo, onCompletedChange, onDelete}: TodoItemProps) {
 return (
  <div className="flex items-center gap-2">
    <label className="flex items-center gap-4 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow" >
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={(event) => onCompletedChange(todo.id,event.target.checked)}
        className="scale-150"
      />
      <span
        className={todo.completed ? 'line-through text-gray-400' : ''}
      >
        {todo.title}
      </span>
    </label>
    <button
      onClick={() => onDelete(todo.id)}
      className="p-2"
    >
      <Trash2 
        size={20}
        className="text-gray-500"
      />
    </button>
    
  </div>
 ) 
}