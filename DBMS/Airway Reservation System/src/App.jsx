import React from "react";
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import Support from './Components/Support/support';
import Info from './Components/Info/info';
import Search from './Components/Search/search';
import Subscribers from './Components/Subscribers/subscribers';
import Travelers from './Components/Travelers/travelers';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
      <Support/>
      <Info/>
      <Search/>
      <Subscribers/>
      <Travelers/>
    </div>
  )
}

export default App;