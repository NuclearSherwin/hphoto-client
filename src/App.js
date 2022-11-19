import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/LoginAndRegister';
import Nav from './components/Nav';
import Post from './components/Post';
import Register from './components/Register';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      <Routes>
        {/* <Route path="/signin" element={<LoginWithGoogle />} /> */}
        {/* <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/dashboard" component={<Dashboard />} /> */}
        <Route path="/posts" element={<Post />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {/* <Post /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
