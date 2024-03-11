import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
import banner from '../images/banner.jpeg';
import '../Styles/HomeStyles.css';
const Home = () => {
  return (
    <div>
    <Layout>
      <div className='home' style={{backgroundImage:`url(${banner})`}}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Best food in INDIA.</p>
          <Link to="/menu">
          <button>
            ORDER NOW
          </button>
          </Link>
        
        </div>
      </div>
    </Layout>
     
    </div>
  );
};

export default Home;
