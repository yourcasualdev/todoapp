import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(false);

    // function that gathers all the tasks
    const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];

    const refresh_tasks = () => {
        setUpdate(!update);
    }

    useEffect(() =>
        setTasks(getTasks())
        , []);


    const generate_id = () => {
        //look existing ids and generate new one
        let ids = tasks.map(task => task.task_id);
        let new_id = uuidv4();

        // if it's not in the list, return it
        while (ids.includes(new_id)) {
            new_id = uuidv4();
        }

        return new_id;
    }


    const add_task = (task_text) => {
        if (task_text === "" || typeof (task_text) !== "string") {
            return;
        }

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        const task = {
            task_text: task_text,
            task_id: generate_id(),
            task_is_completed: false,
            task_date: new Date()
        }

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTasks(getTasks());
    }


    const deleteTask = (task_id) => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.task_id !== task_id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTasks(getTasks());
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
        setTasks(getTasks());
    }

    const filterTasks = (filter) => {
        let tasks = getTasks();
        console.log(tasks)
        tasks = tasks.filter(task => {
            if (filter === "all") {
                return true;
            } else if (filter === "completed") {
                return task.task_is_completed;
            } else if (filter === "uncompleted") {
                return !task.task_is_completed;
            } else if (filter === "today") {
                let today = new Date();
                let task_date = new Date(task.task_date);
                return (today.getDate() === task_date.getDate() && today.getMonth() === task_date.getMonth() && today.getFullYear() === task_date.getFullYear());
            } else if (filter === "week") {
                let today = new Date();
                let task_date = new Date(task.task_date);
                return (today.getDate() - task_date.getDate() <= 7);
            } else if (filter === "month") {
                let today = new Date();
                let task_date = new Date(task.task_date);
                return (today.getMonth() === task_date.getMonth() && today.getFullYear() === task_date.getFullYear());
            } // includes filter word
            else if (task.task_text.toLowerCase().includes(filter.toLowerCase())) {
                return true;
            }
        });
        setTasks(tasks);
    }

    const value = {
        tasks,
        add_task,
        deleteTask,
        toggleTask,
        refresh_tasks,
        filterTasks
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

