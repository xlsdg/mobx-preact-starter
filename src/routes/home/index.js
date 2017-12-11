import {
  h,
  Component
} from 'preact';

import styles from './style';

export default class Home extends Component {
  render() {
    return (
      <div class={styles.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </div>
    );
  }
}
