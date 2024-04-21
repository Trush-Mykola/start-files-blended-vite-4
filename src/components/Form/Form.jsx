import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
// import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todoOps';

export const Form = () => {
  const dispatch = useDispatch();

  const getTodosQuery = event => {
    event.preventDefault();
    const todo = event.target.elements.search.value;
    if (todo.toLowerCase().trim() === '') {
      return;
    }
    const todoObj = {
      text: todo,
      // id: nanoid(),
    };
    dispatch(addTodo(todoObj));
    event.target.reset();
  };

  return (
    <form className={style.form} onSubmit={getTodosQuery}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
