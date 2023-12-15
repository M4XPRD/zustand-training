import React from 'react';
import { Text } from '@chakra-ui/react';
import { useTodos } from '../store';

const TotalTodos = () => {
  const count = useTodos((state) => state.todos.length);

  return (
    <Text fontWeight="bold">
      Total:&nbsp;
      {count}
    </Text>
  );
};

export default TotalTodos;
