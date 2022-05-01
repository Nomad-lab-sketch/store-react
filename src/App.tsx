
import s from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

import MainContent from "./components/mainContent/MainContent";

function App() {

  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <div className={s.mainWrapper}>
          <MainContent />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
