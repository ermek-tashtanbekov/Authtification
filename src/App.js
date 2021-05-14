
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './componet/Home';
import Secret from './componet/Secret';

function App() {
  const dispath = useDispatch()
  const auth = useSelector(state => state);

  function toggleAuthCallBack() {
    dispath({ type: "TOGLE" })
  }

  return (
    <div className="App">
      
        <NavLink to="/" exact>Home</NavLink>
        {auth ? <NavLink to="/secret" exact>Secret</NavLink> : null}
        <button onClick={toggleAuthCallBack}>{auth ? "Logout" : "Login"}</button>
        <hr />
        <Switch>
        <Route path="/" component={Home} exact />
        {auth ? <Route path="/secret" component={Secret} exact /> : null}
        {/* <Route path="/" render={() => "Hello"} exact/>
      {auth ? <Route path="/secret" render={() => "Secret"} exact/> : null} */}
      </Switch>

    </div>
  );
}

export default App;
