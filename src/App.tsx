// Components
import Navbar from './assets/components/navbar/Navbar';
import Footer from './assets/components/footer/Footer';
import MainContent from './assets/components/mainContent/MainContent';

// CSS
import './App.css';


function App() {

  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
