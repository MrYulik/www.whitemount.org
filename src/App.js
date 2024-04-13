import Header from "./components/Header";
import './App.css';
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Privatepolice from "./pages/Privatepolice";

function App() {
  return (
      <div className="App">
          <div className="area">
              <ul className="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>

          <Header/>
          <Routes>
              <Route path='/' element={ <MainPage /> } />
              <Route path='/police' element={ <Privatepolice /> } />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
