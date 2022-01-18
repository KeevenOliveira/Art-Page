
import { useEffect, useState } from 'react';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Presentation from '../components/Presentation';

const Dashboard = () =>{
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setVisible(true)
  },3500)
  },[])
  return (
    <>
      <Presentation/>
      {visible &&
      <>
        <Main/>
        <Menu/>
        <Footer/>
      </>
      }
    </>
  );
}

export default Dashboard;