'use client';

import { useEffect, useState } from 'react';

type Task = {
  id: number;
  title: string;
  status: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: 20 }}>Loading tasks...</p>;
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>📋 Task Tracking App</h1>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> — {task.status}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
