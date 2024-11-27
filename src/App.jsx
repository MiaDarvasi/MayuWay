import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { HomePage } from './pages/HomePage.jsx'
import { Yoga } from './pages/Yoga.jsx';

import { AppHeader } from './cmps/AppHeader.jsx'
import { Connect } from './cmps/Connect.jsx'

import { ScrollToTop } from './cmps/ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yoga" element={<Yoga />} />
        </Routes>
        <Connect />
      </div>
    </Router>
  );
}

export default App;
