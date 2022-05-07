import Shop from "./Pages/Shop/Shop";
import Topbar from "./components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import NewsLetter from './components/Newsletter/NewsLetter'
import Footer from './components/Footer/Footer'
import Single from "./Pages/Single/Single";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <Home/> */}
      {/* <Shop/> */}
      {/* <Single/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <Cart/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
