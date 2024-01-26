import './App.css';
import Hero from './components/Hero';
import ThumbnailVideo from './components/VideoThumbnail';

function App() {
  return (
    <div className="App">
      <Hero />
      <ThumbnailVideo thumbnail={'/assets/one-piece.jpe'} videoPreview={'https://www.youtube.com/embed/MCb13lbVGE0?muted=1&controls=0&autoplay=0'}/>
    </div>
  );
}

export default App;
