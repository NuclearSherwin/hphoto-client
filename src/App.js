import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      <Routes>
        {/* <Route path="/signin" element={<LoginWithGoogle />} /> */}
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" component={<Dashboard />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/favorite" element={<Tags />} /> */}
      </Routes>
    </div>
  );
}

export default App;
