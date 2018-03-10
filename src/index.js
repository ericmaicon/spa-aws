import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

import 'styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
      </span>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
