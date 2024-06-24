import { Todo } from "../types/todos";

interface TodoSummaryProps {
  todos: Todo[];
  deleleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleleteAllCompleted
}: TodoSummaryProps) {
  const completedTodos = todos.filter(todo => todo.completed)


  return (
    <div className="text-center space-y-2">

      <p>
        {completedTodos.length} / {todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleleteAllCompleted}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete All Completed
        </button>
      )}

    </div>
  )
}