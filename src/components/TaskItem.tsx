import React from 'react';
import {Task} from "../types";


interface TaskItemProps {
    task: Task;
    handleToggleCompletedStatus: (taskId: number) => void;
    handleDeleteTask: (taskId: number) => void;
    handleEditTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
                                               task,
                                               handleToggleCompletedStatus,
                                               handleDeleteTask,
                                               handleEditTask
                                           }) => {
    return (
        <div className="task-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompletedStatus(task.id)}
                className="task-checkbox"
            />
            <span
                className={`task-text ${task.completed ? 'completed' : ''}`}
            >
    {task.taskName}
    </span>
            <div className="task-actions">
                <button
                    onClick={() => handleEditTask(task.id)}
                    className="edit-button"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="delete-button"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
export default TaskItem;
