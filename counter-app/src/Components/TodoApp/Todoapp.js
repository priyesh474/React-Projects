import React, { useState } from 'react'
import './todoapp.css'

const Todoapp = () => {

    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [uid, setUid] = useState();
    const [update, setUpdate] = useState(false);

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleList = (e) => {
        setList([...list,input])
        setInput("");
    }

    const handleUpdate = () => {
        list.splice(uid, 1, input)
        setInput("");
        setUpdate(false);
    }

    const handleDelete = (i) => {
        const filterList = list.filter((element) => element !== list[i]);
        setList(filterList);
    }

    const handleEdit = (i) => {
        const filterList = list.filter((element) => element === list[i]);
        setInput(filterList[0]);
        setUid(i);
        setUpdate(true);
    }

  return (
    <div>
      <div className="container card-box">
        <div className="text-center todolist-box">
            <h2>Todo App</h2>

            <div className="input-box">
                <input type="text" value={input} onChange={handleInput}/>
                { 
                    update ? <button onClick={handleUpdate} className='btn btn-success ms-3'>Update</button> : <button onClick={handleList} className='btn btn-primary ms-3'>Add Task</button>
                }
            </div>

            <div className="listbox todo-data">
                <ul className='list-data'>
                    {
                        list.map((item, i) => 

                            <li className='d-flex' key={i}> 
                                {item} 
                                <span className='d-flex'>
                                    <button onClick={() => handleEdit(i)} className='btn btn-primary ms-3'>Edit</button>
                                    <button onClick={() => handleDelete(i)} className='btn btn-danger ms-3'>Delete</button>
                                </span>
                            </li>

                        )
                    }
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Todoapp
