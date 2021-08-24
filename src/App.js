import './App.css';
import Contact from './conponents/Contact';
import Message from './conponents/Message';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Message}/>
        <Route exact path="/files" component={Message}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/links" component={Message}/>
        <Route>
        <Message text="File Not Found"></Message>
          </Route>
          </Switch>
    </Router>
  );
}

export default App;
