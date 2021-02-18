import profileImage from './Img/profile-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>First React App</h1>
      <h2>Author: Meena</h2>
      <img src={profileImage} className="profile-image" alt="profile-image" />
    </div>
  );
}

export default App;
