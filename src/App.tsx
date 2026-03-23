import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MVA from './pages/MVA';
import ModalityTemplate from './pages/ModalityTemplate';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MVA />} />
          <Route path="/mva" element={<MVA />} />
          <Route path="/:modalityId" element={<ModalityTemplate />} />
        </Route>
      </Routes>
    </Router>
  );
}
