import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home/Home';
const Routers = () => {
  return (
    <div>
      <Router basename='ui-reactjs'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reports" element={<Home />} />
          <Route path="/sales" element={<Home />} />
        

         
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;