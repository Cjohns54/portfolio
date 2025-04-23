import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from './screens/Box/Box';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Box />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App; 