import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/homePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
