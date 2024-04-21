import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'reduxTodo/todosSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {filteredTodos.length === 0 ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {filteredTodos.map((todo, index) => {
            return (
              <GridItem key={todo.id}>
                <Todo todo={todo} index={index} />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </>
  );
};
