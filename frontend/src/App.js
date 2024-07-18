import { useState } from 'react';
import AuthForm from './components/AuthForm';
import UserProfile from './components/UserProfile';
import QRCodeDisplay from './components/QRCodeDisplay';
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (
        <AuthForm setUser={setUser} />
      ) : (
        <div className='flex flex-col m-auto gap-14'>
          <UserProfile userId={user._id} />
          
          <QRCodeDisplay userId={user._id} />
        </div>
      )}
    </div>
  );
};

export default App;
