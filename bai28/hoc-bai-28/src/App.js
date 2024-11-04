import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Content from "./components/Content/Content";
function App() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content text="Content 1" number={10} active={true}/>
        <MainContent />
        <Content text="Content 2" number={5} active={false}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
