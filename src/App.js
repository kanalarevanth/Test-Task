import './App.css';
import image1 from './Images/1.png'
import image2 from './Images/2.png'
import image4 from './Images/4.png'
import image5 from './Images/5.png'
import image6 from './Images/6.png'
import image7 from './Images/7.png'
import image8 from './Images/8.png'
import image9 from './Images/9.png'
import image10 from './Images/10.png'
import image11 from './Images/11.png'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="RightText">
          <img src={image1} alt="img1"></img>
        </div>
        <div className="LeftText">
          <p>SOS</p>
          <p>Meet Bodhi</p>
          <p>Experts</p>
          <p>My Wellness</p>
          <p>Assessment</p>
          <p>My sessions</p>
          <img src={image11} alt="img11"></img>
          <p>Login</p>
        </div>
      </div>
      <div className="Body">
        <div className="LeftContainer">
        <img src={image2} alt="img2" className="img2"></img>
        <img src={image10} alt="img10" className="img10"></img>
        <p className="img3">How may I help you today?</p>
        <div className="images4">
          <div className="loveimg">
            <img src={image4} alt="img4" className="img4"></img>
            <p><span>RelationShip</span><br></br><span>Advice</span></p>
            </div>
          <div className="career">
            <img src={image5} alt="img5" className="img5"></img>
            <p><span>Career</span><br></br><span>Counselling</span></p>
          </div>
          <div className="self">
            <img src={image6} alt="img6" className="img6"></img>
            <p><span>Self</span><br></br><span>Improvement</span></p>
          </div>
          <div className="more">
            <img src={image7} alt="img7" className="img7"></img>
            <p><span>Explore</span><br></br><span>More</span></p>
          </div>
        </div>
          <div className="button">
            <button>Get Started</button>
          </div>
        </div>
        <div className="RightContainer">
          <div className="imageparent">
            <img src={image8} alt="img8" className="img8"></img>
            <img src={image9} alt="img9" className="img9"></img>
            <p className="doing">How are you doing?</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
