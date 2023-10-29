import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Skills'><Parallax type='skills'/></section>
    <section>Skills</section>
    <section id='Portfolio'><Parallax type='portfolio'/></section>
    <section>Portfolio</section>
    <section>Portfolio</section>
    <section>Portfolio</section>
    <section id='About'>About</section>
    <section id='Contact'>Contact</section>
  </div>
};

export default App;
