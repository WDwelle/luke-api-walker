import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form/>
        <Switch>

          <Route path="/:topic/:id">
            <Display />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
