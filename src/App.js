import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Snowfall from './components/Snowfall';

function App() {
  return (
    <div className="App">
        <Snowfall/>
        <ScrollToTop/>
        <Header/>
        <Footer></Footer>
    </div>
  );
}

export default App;
