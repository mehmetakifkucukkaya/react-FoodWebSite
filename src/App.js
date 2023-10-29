import FoodCards from './components/FoodCards';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <FoodCards />
    </div>
  );
}

export default App;
