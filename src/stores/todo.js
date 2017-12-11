import {
  types
} from 'mobx-state-tree';

export default types.model({
  name: types.optional(types.string, ''),
  done: types.optional(types.boolean, false)
}).actions(self => ({
  setName(name) {
    self.name = name;
  },
  toggle() {
    self.done = !self.done;
  }
}));
