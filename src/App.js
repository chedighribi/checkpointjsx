import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import './style.css'

function App() {
  return (
  <div classname="App">
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="titlered">CG Photography</h1>
    <br />
    <div className='images'>
    <img src={imageInSrc} alt='immage' className='imageleft' />
    <br />
    <img src="/imageInPublic.jpg" alt='immage' className='imagesright' />
    </div>
  </div>
  <video width={620} height={540} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>

  );
}

export default App;
