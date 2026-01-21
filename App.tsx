import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-[#FAF7F2]">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;