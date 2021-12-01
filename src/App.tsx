import './my-sass.scss';
import {ReactElement, useState} from "react";
import MovieCategories from "./components/movieCategories/MovieCategories";
import FilterMovieCategory from "./components/navigation/navigation";
import SearchBar from "./components/searchBar/searchBar";

const App = (): ReactElement => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [search, setSearch] = useState<string>("");

  return (
      <div className={'App'}>
          <FilterMovieCategory setSelectedCategory={setSelectedCategory} />
          <SearchBar setSearch={setSearch} search={search} />
          <MovieCategories selectedCategory={selectedCategory} search={search} />
      </div>
  );
}
export default App;
