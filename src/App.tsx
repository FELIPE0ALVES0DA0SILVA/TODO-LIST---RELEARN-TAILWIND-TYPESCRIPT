import { useEffect, useState } from "react"
import { dummyData } from "./assets/data/todos"
import AddTodoForm from "./assets/components/AddTodoForm"
import Todolist from "./assets/components/Todolist"
import TodoSummary from "./assets/components/TodoSummary"

function App() {
  const [todos, setTodos] = useState(dummyData)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])


  function setTodoCompleted(id:number, completed: boolean) {
      setTodos((prevTodos) => prevTodos.map(todo => (
        todo.id === id ? {...todo, completed} : todo
      )))
  }

  function addTodo(title:string) {
    setTodos(prevTodos => [
      {
        id: Date.now(),
        title,
        completed:false
      },
      ...prevTodos
    ])
  }

  function deleteTodo(id:number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }


  function deleteAllCompletedtodos() {
    setTodos( prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  return (
    <main className="py-10 bg-red-50 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your ToDos</h1>
      <div className="max-w-lg mx-auto bg-slate-50 rounded-xl p-5 space-y-6">
        <AddTodoForm
          onSubmit={addTodo}
        />
        <Todolist
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}

        />
      </div>

      <TodoSummary 
        todos={todos}
        deleleteAllCompleted={deleteAllCompletedtodos}

      />
    </main>
  )
}

export default App
