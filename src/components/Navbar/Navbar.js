import { useEffect, useState } from 'react'

import { useTaskContext } from '../../context/taskContext'


const Navbar = () => {

    const { filterTasks } = useTaskContext()

    const handleSearchChange = (e) => {
        filterTasks(e.target.value)
    }


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl">ToDos</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                        onChange={(e) => handleSearchChange(e)}
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a href='/' className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href='/'>Settings</a></li>
                        <li><a href='/'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar