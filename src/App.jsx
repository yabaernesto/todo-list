import { useState } from "react"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programcao',
      description: 'Estudar programacao para se tornar desenvolvedor full stack',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Ingles',
      description: 'Estudar ingles no youtube',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Matematica',
      description: 'Estudar Algebra Linear no youtube',
      isCompleted: false,
    },
  ])

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })

    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }
  
  return (
    <div className="h-screen w-screen flex justify-center p-6 bg-slate-500">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask />
        <Tasks 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick} 
        />
      </div>
    </div>
  )
}

export default App
