import { Task } from "./types";
import { useState } from "react";

type FormProps = {
    addTask: (task: Task) => void
}

export default function Form({addTask}: FormProps) {
    const [text, setText] = useState('')
    
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!text) {
            alert('Please enter a task')
            return
        }
        addTask({
            id: new Date().getTime().toString(),
            description: text,
            isCompleted: false
        })

        setText('')
    }

    return (
     <form className="form task-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="form-input"
          value={text} 
          onChange={(e)=> setText(e.target.value)} />
          <button type="submit" className="btn">
            Add task
          </button>
     </form>
    );
  }