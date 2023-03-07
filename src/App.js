import './App.css';
import Login from './Login';
import { app } from './index';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './index';

function App() {
  const [currentPage, setPage] = useState(0);
  const [user, loading, error] = useAuthState(auth);
//  app();

  switch (currentPage) {
      case 1:
      
      break;
      case 2:
      
      break;
    default:
      return (
        <div className="App">
          <header className="App-header">
            <Login />
          </header>
        </div>
      );

  }

  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
