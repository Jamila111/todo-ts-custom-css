import React from 'react';
import {Task} from "../types";
import TodoList from "./TodoList.tsx";

interface FormProps {
    input: string;
    setInput: React.Dispatch.SetStateAction<string>;
    tasks: Task[];
    setTasks: React.Dispatch.SetStateAction<Task[]>;
    editingTaskId: Task | null
    setEditingTaskId: React.Dispatch.SetStateAction<string>;

}

const Form: React.FC<FormProps> = ({input, setInput, tasks, setTasks, editingTaskId, setEditingTaskId}) => {

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    };

    const handleAddTask = () => {
        if (editingTaskId !== null) {
            setTasks((prevTasks) =>
                prevTasks.map(task =>
                    task.id === editingTaskId ? { ...task, taskName: input } : task
                )
            );

            setInput('');
            setEditingTaskId(null);
        } else if (input.trim() !== '') {
            const newTask: Task = {
                id: Date.now(),
                taskName: input,
                completed: false
            };

            setTasks((prevTasks) => [...prevTasks, newTask]);
            setInput('');
        }
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className='task-wrapper'>

            <input
                type="text"
                placeholder="Enter task..."
                className="task-input"
                value={input}
                onChange={onInputChange}
                onKeyPress={handleKeyPress}

            />

            <button className='task-add-button'
                    type="submit"
                    onClick={handleAddTask}
            >
                {editingTaskId ? "Ok" : "Add"}
            </button>
            <TodoList
                input={input}
                setInput={setInput}
                tasks={tasks}
                setTasks={setTasks}
                editingTaskId={editingTaskId}
                setEditingTaskId={setEditingTaskId}

            />

        </div>
    );
};

export default Form;