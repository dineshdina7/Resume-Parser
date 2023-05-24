import './Home.css';
import GetStarted from './GetStarted';
import NavBar from "./NavBar";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <NavBar/>
      <div className='App'>
        <GetStarted/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
