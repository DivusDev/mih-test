import logo from './logo.svg';
import './App.css';
import Search from './Search'

//router
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={ Search } exact />
          <Route path="/found" component={ List } exact />
        </Switch>
        <Search/>
      </div>
    </BrowserRouter>
  );
}

export default App;
