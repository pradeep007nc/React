import ReactDOM from 'react-dom';
import DemoComponent from './DemoComponent';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});