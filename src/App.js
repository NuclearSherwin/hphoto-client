import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Post from './components/Post';

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
      </Routes>
      <Post />
    </div>
  );
}

export default App;
