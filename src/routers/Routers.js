import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;