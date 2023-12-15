import React from 'react';
import { VStack, Divider } from '@chakra-ui/react';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import TotalTodos from './components/TotalTodos';
import NewTodo from './components/NewTodo';
import FetchTodos from './components/FetchTodos';

const App = () => (
  <VStack spacing={4}>
    <Filter />
    <TodoList />
    <Divider />
    <TotalTodos />
    <NewTodo />
    <FetchTodos />
  </VStack>
);

export default App;
