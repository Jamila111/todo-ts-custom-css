import React from 'react';
import {Task} from "../types";
import TaskItem from "./TaskItem.tsx";

interface TodoListProps {
    tasks: Task[];
    handleToggleCompletedStatus: (taskId: number) => void;
    handleDeleteTask: (taskId: number) => void;
    handleEditTask: (taskId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({tasks, setTasks, setEditingTaskId, setInput}) => {

    const handleToggleCompletedStatus = (taskId: number) => {
        setTasks((prevTasks) =>
            prevTasks.map(task =>
                task.id === taskId ? {...task, completed: !task.completed} : task
            )
        );
    };

    const handleDeleteTask = (taskId: number) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
    };

    const handleEditTask = (taskId: number) => {
        setEditingTaskId(taskId);

        const taskToBeEdited = tasks.find(task => task.id === taskId);
        if (taskToBeEdited) {
            setInput(taskToBeEdited.taskName);
        }
    };


    return (
        <div className="todo-list">

            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleToggleCompletedStatus={handleToggleCompletedStatus}
                    handleDeleteTask={handleDeleteTask}
                    handleEditTask={handleEditTask}
                />
            ))}
        </div>
    );
};

export default TodoList;