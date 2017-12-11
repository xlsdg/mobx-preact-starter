import {
  Component
} from 'preact';

export default class StoreProvider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render({
    children
  }) {
    return children[0];
  }
}
