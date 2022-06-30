import Helmet from "react-helmet";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import MyRouters from "./config/MyRouters";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>PickBazar</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Header />
      <MyRouters />
      <Footer />
    </div>
  );
}

export default App;
