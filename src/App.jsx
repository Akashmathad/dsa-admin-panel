import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './utils/AppLayout';
import HomePage from './pages/HomePage';
import DSAPage from './pages/DSAPage';
import ResultsPage from './pages/ResultsPage';
import OthersPage from './pages/OthersPage';
import AptitudePage from './pages/AptitudePage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/dsa" element={<DSAPage />} />
          <Route path="/aptitude" element={<AptitudePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/others" element={<OthersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
