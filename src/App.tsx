import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AuthPage from './components/auth';
import './App.css';

interface Props {

}
interface State {

}
class App extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={AuthPage} />
          
          <div />
        </div>
      </Router>
    );
  }
}

export default App;
