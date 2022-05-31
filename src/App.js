import './App.css';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header';
import MyRouters from "./config/MyRouters"

function App() {
  return (
    <div className="App">
      <Header/>
      <MyRouters/>
      <Footer/>
    </div>
  );
}

export default App;
