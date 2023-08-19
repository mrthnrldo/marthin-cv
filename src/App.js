  import './App.css';
  import Sidebar from './components/sidebar/Sidebar';
  import Home from './components/home/Home';
  import About from './components/about/About';
  import Services from './components/services/Services';
  import Resume from './components/resume/Resume';
  import Portofolio from './components/portofolio/Portofolio';
  import Contact from './components/contact/Contact';


  function App() {
    return (
      <div className="App">
        <Sidebar/>
        <main>
          <Home/>
          <About/>
          <Services/>
          <Resume/>
          <Portofolio/>
          <Contact/>
        </main>
    </div>
  );
}

export default App;
