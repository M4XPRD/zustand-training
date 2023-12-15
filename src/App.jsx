import React from 'react';
import { VStack, Divider } from '@chakra-ui/react';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import TotalTodos from './components/TotalTodos';
import NewTodo from './components/NewTodo';

const App = () => (
  <VStack spacing={4}>
    <Filter />
    <TodoList />
    <Divider />
    <TotalTodos />
    <NewTodo />
  </VStack>
);

export default App;
