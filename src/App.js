import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import NavBar from './Component/NavBar/NavBar';
import Profile from './Component/Profile/Profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />
      <div></div>

      
    </div>
  );
}

export default App;
