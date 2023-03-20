import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponents from "../components/NavbarComponents";
import PopularMovieList from "../components/PopularMovieList";
import PopularDua from "../components/PopularDua";

const HomePage = () => {
  const search = (q) => {
    console.log({ q });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponents />
        <input className="Movie-search" placeholder="Cari FIlm yang anda inginkan ..." onChange={({ target }) => search(target.value)} />
        <h1>Popular movies</h1>
        <div className="Popular-container">
          <PopularMovieList />
        </div>
        <h1 className="pt-5">Recommendation movies</h1>
        <div className="Rekomendasi-container">
          <PopularDua />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
