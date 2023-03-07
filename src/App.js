import './App.css';
import Login from './Login';
import { app } from './index';

function App() {
 // const [login, setLogin] = useState(false);

  app();

  return (

    <div className="App">
      <header className="App-header">
        <h1>a</h1>
        <Login />
      </header>
    </div>
  );
}

export default App;
