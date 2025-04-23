import { Routes, Route } from 'react-router-dom';
import { Box } from './screens/Box/Box';
import { Contact } from './screens/Contact/Contact';
import { HardwareProjects } from './screens/Projects/HardwareProjects';
import { SmartDesk } from './screens/Projects/SmartDesk';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Box />} />
      <Route path="/hardware-projects" element={<HardwareProjects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/smart-desk" element={<SmartDesk />} />
    </Routes>
  );
}

export default App; 