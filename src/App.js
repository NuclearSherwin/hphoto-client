import { Routes, Route, Link } from 'react-router-dom';
import GetImages from './components/GetImage';
import Login from './components/LoginAndRegister';
import Nav from './components/Nav';
import Post from './components/Post';
import PostList from './components/PostList';
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
        <Route path="/posts" element={<GetImages />} />
        <Route path='/register' element={<Register />} />
        <Route path='/your-posts' element={<Post />} />
      </Routes>
      {/* <Post /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
