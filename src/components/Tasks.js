import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <> 
      {tasks.map((task, index) => ( //tabk is a variable declared
          <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/> //here passing task as a prop to Task component named it tabk to remove the confusion
      ))}  
    </>
  )
}

export default Tasks