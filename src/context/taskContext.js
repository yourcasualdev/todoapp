import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    }, [update]);

    const refresh_tasks = () => {
        setUpdate(!update);
    }


    const add_task = (task_text) => {
        if (task_text === "" || typeof (task_text) !== "string") {
            return;
        }

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        const task = {
            task_text: task_text,
            task_id: tasks.length + 1,
            task_is_completed: false
        }

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        refresh_tasks();
    }

    const get_tasks = () => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        return tasks;
    }

    const deleteTask = (task_id) => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.task_id !== task_id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTasks(get_tasks());
    }

    const toggleTask = (task_id) => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.map(task => {
            if (task.task_id === task_id) {
                task.task_is_completed = !task.task_is_completed;
            }
            return task;
        }
        );
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTasks(get_tasks());
    }

    const value = {
        tasks,
        add_task,
        deleteTask,
        toggleTask,
        refresh_tasks
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}


const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTaskContext must be used within a TaskProvider");
    }
    return context;
}

export default TaskProvider;
export { useTaskContext };

