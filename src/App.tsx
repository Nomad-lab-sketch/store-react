import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import s from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { fetchProductCardData } from "./redux/reducers/actionCreators";
import { useAppDispatch } from "./redux/hooks/redux";
import Main from "./components/main/Main";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductCardData());
  }, []);

  return (
    <Router>
      <div className={s.App}>
        <Header />
        <div className={s.mainWrapper}>
          <Main />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
