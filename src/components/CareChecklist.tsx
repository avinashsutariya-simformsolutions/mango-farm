import { useState } from 'react';

type CareTask = {
  id: string;
  title: string;
  done: boolean;
};

const starterTasks: CareTask[] = [
  { id: 'water-row-b', title: 'Water the Row B saplings', done: false },
  { id: 'check-pests', title: 'Check Kesar leaves for pests', done: false },
];

export default function CareChecklist() {
  const [tasks, setTasks] = useState<CareTask[]>(starterTasks);
  const [draft, setDraft] = useState('');

  // Derived during render: never stored in state.
  const remaining = tasks.filter((task) => !task.done).length;

  function addTask() {
    const title = draft.trim();
    if (title === '') return;

    setTasks((prev) => [...prev, { id: crypto.randomUUID(), title, done: false }]);
    setDraft('');
  }

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  }

  function removeTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <section aria-labelledby="care-checklist-heading">
      <h2 id="care-checklist-heading">Orchard care today</h2>
      <p>
        {remaining} of {tasks.length} tasks left
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault(); // stop the browser from reloading the page
          addTask();
        }}
      >
        <label htmlFor="new-care-task">New task</label>
        <input
          id="new-care-task"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="e.g. Fertilise Row C"
        />
        <button type="submit">Add</button>
      </form>

      {tasks.length === 0 ? (
        <p>No orchard work scheduled today 🌤️</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                {task.title}
              </label>
              <button
                type="button"
                onClick={() => removeTask(task.id)}
                aria-label={`Remove ${task.title}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
