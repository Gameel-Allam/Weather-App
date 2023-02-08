import './App.css';
import Search from './components/search/Search';
import Weather from './components/weather/Weather';

function App() {

  const getSearch = (inputSearch) => {
    console.log(inputSearch);
  }
  return (
    <div className="App">
      <Search getSearch={getSearch} />
      <div className='container'>
      <Weather />
      </div>
    </div>
  );
}

export default App;
