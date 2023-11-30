import './App.css';
import Intro from './components/Intro';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Sidebar from './partials/Sidebar';


function App() {
  return (
    <div className="App">

      <div>
        <Header />
        <div className="relative mx-auto flex max-w-7xl justify-center px-2 lg:px-8">
          <Sidebar />
          <Intro />
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
