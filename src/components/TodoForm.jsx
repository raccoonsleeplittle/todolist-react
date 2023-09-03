import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [priority, setPriority] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  // useEffect(() => {
  //   console.log(priority)
  // },[priority]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      priority: priority,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />


          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <div className="test">
          <div className="select">
            <select name="priority" value={priority} onChange={e => setPriority(e.target.value)}>
              <option selected disabled>Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          </div>
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>


        </>
      )}
    </form>
  );
}

export default TodoForm;