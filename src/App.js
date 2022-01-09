import HeroSection from "./pages/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./pages/AboutSection";
import ClubsProjectsSection from "./pages/ClubsProjectsSection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ClubsProjectsSection/>
    </div>
  );
}

export default App;
