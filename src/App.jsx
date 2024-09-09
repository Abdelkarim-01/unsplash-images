
import { useGlobalContext } from "./components/context";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
 
  return <>
        <h1>Unsplash Images Starter</h1>
          <ThemeToggle />
          <SearchForm />
          <Gallery />
  </>
};
export default App;
