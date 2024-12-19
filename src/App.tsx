import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header.tsx";
import Form from "./components/Form.tsx";
import {Task} from "./types";

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>('');
  const [editingTaskId, setEditingTaskId] = useState<Task | null>(null);

  return (
    <div className="App">
      <Header />

      <Form
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
          editingTaskId={editingTaskId}
          setEditingTaskId={setEditingTaskId}
      />
    </div>
  );
}

export default App;
