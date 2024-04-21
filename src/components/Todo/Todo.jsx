import { Text } from 'components';

import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'reduxTodo/todosSlice';

export const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();
  const deleteTodoFromList = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {index + 1}
      </Text>

      <Text>{todo.text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={deleteTodoFromList}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
