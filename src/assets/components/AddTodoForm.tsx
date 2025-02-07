import { useState } from "react"

interface AddTodoFormProps {
  onSubmit: (title:string) => void
}


export default function AddTodoForm({onSubmit}: AddTodoFormProps) {

  const [input, setInput] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!input.trim()) return

    onSubmit(input)
    setInput('')
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
        placeholder="What needs to be done? "
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-800 text-white hover:bg-slate-600"
      >
        Add
      </button>
    </form>
  )
}