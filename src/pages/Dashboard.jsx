import { useEffect, useState } from "react";

const Dashboard = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setTodos(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
      <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Total data:{todos.length}</h1>
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`border-2 p-4 rounded-md ${
                todo.completed ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <h1 className="text-xl">Title: {todo.title}</h1>
              <p>{todo.completed ? "Completed" : "Not Completed"}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Dashboard;