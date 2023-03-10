import './App.css';
import Login from './Login';
//import { app } from './index';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './index';
import { MeetingList } from './meetingList';
import { MeetingForm } from './meetingForm';

function App() {
  // Variable servant a la navigation
  const [currentPage, setPage] = useState(0);
  // Moniteur pour le status d'authentification
  const [user] = useAuthState(auth); //  autres variables utilisables: loading, error

  useEffect(() => {
    // Si user & signal pour changer de page & page 2, aller a page 1
    if (user) {
      setPage(1)
    // Si user & signal pour changer de page & page 1, aller a page 2
    } else if (user) {
      setPage(2)
    } else {
    // Sinon mettre par défaut page de login  
      setPage(0)
    }
  },[user]);
  
  // Navigation entre les 3 pages, login est la page par défaut
  switch (currentPage) {
      case 1:
        return (
          <div className="App">
            <header className="App-header">
              <h1>Prendre un RDV</h1>
              <MeetingForm />
            </header>
          </div>
        );
      case 2:
        return (
          <div className="App">
            <header className="App-header">
              <h1>Liste des RDV</h1>
              <MeetingList />
            </header>
          </div>
        );      
    default:
      return (
        <div className="App">
          <header className="App-header">
            <Login />
          </header>
        </div>
      );

  }
}

export default App;
