import React from 'react'
import { ITask } from '../Interface';

interface Props{
    task:ITask;
    taskComplete(taskNameToDelete:String): void;

}


const TodoTask =({task, taskComplete}: Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
           <button onClick={() => {taskComplete(task.taskName)}}>X</button>
        </div>
    )
}

export default TodoTask;
