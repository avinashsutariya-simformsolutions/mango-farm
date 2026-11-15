type CareTaskListProps = {
  tasks: string[];
  emptyMessage?: string; // optional: the parent may leave it out
};

export default function CareTaskList({
  tasks,
  emptyMessage = 'No orchard work scheduled today 🌤️', // default value: replaces defaultProps
}: CareTaskListProps) {
  // Early return: handle the special case first.
  if (tasks.length === 0) {
    return <p>{emptyMessage}</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  );
}
