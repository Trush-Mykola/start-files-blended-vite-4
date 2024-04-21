import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { selectFilter, setFilter } from 'reduxTodo/todosSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={onChange}
    />
  );
};
