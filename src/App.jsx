import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Leaderboard from "./components/LeaderBoard";
import MatchmakingUI from "./components/Matchmaking";
import NavBar from "./components/Navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <MatchmakingUI />
      <Leaderboard />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
