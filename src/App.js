import logo from './logo.svg';
import './App.css';
import Search from './Search'
import List from './List'

//router
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={ Search } exact />
          <Route path="/list" component={ List } exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
