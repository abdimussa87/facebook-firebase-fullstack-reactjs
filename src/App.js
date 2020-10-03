import React, { useEffect } from 'react';
import './App.css';
import FacebookEmbed from './FacebookEmbed';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import { actionTypes } from './reducer';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo) {
      dispatch({
        type: actionTypes.SET_USER,
        user: userInfo
      })
    }

  }, [])
  return (
    <div className="app">
      {!user ?
        <Login />
        :
        (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <FacebookEmbed />

            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
