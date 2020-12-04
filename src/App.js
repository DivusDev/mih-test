import logo from './logo.svg';
import './App.css';
import Search from './Search'
import List from './List'
import {Error} from './Error'

//router
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={ Search } exact />
          <Route path="/list" component={ List } exact />
          <Route component={Error}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
