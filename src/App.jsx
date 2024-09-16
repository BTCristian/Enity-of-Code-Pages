import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogSection from "./components/BlogSection";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col top-0 text-white">
      <Header />
      <div className="p-3 mb-2">
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
