import {
  Section,
  Container,
  Header,
  Text,
  TodoList,
  Form,
  Filter,
} from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'reduxTodo/todoOps';
import { selectIsLoading, selectTodos } from 'reduxTodo/todosSlice';

export const App = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {isLoading && <Text>Loading...</Text>}
          <Filter />
          {todos.length ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
