import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import LeftSidebar from './components/LeftSidebar';
// import menuData from './components/menuData.json'
import Layout from './layout/Layout.js';
import Home from './views/home/Home.js';
import Profile from './views/profile/Profile.js';
import Settings from './settings/Settings.js';
import PsuAdd from './components/master-data/psu/Add.js';
function App() {
  const Home = () => <div>Home bmmmbmmb</div>;
const About = () => <div>About Pagefdfdfdfdffd</div>;
const Contact = () => <div>Contact Page</div>;
  return (
    <Router>
    <div style={{ display: 'flex' }}>
      {/* <LeftSidebar menuData={menuData} /> */}
      <Layout>
      <div>
        <Routes>

        <Route path="/home" exact element={<Home />}/>
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/svrs/master-data/Psu/Add/" exact element={<PsuAdd />} />

          {/* <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact celement={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/services" exact component={() => <div>Services Page</div>} />
          <Route path="/services/service-1" component={() => <div>Service 1 Page</div>} />
          <Route path="/services/service-2" component={() => <div>Service 2 Page</div>} /> */}
        </Routes>
        
      </div>
      </Layout>
    </div>
  </Router>
  );
}

export default App;
