import './App.css';
import Search from './components/search/Search';

function App() {

  const getSearch = (inputSearch) => {
    console.log(inputSearch);
  }
  return (
    <div className="App">
      <Search getSearch={getSearch} />
    </div>
  );
}

export default App;
