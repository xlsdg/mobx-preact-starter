import {
  types,
  flow
} from 'mobx-state-tree';

import Todo from './todo';

export default types.model({
  todos: types.optional(types.map(Todo), {})
}).actions(self => ({
  addTodo: flow(function* (id, name) {
    self.todos.set(id, Todo.create({
      name
    }));

    return self.todos;
  })
}));
