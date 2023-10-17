import React from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>     
     <h1>Home</h1>
     <Link to='/'>Sair</Link>
    </Layout>
  )
}

export default Home;