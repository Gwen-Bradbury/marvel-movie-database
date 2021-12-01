import React, {ChangeEvent, ReactElement} from 'react';

interface Props {
    setSearch: (value: string) => void;
    search: string;
}

const SearchBar = (props: Props): ReactElement => {
    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        props.setSearch(event.target.value);
    }

    return (
        <div className="container">
          <header className="App">

          </header>
            <div>
                <input value={props.search} onChange={onChange} placeholder="Search" className="search-bar" />
            </div>
            <div>
                <h1>
                    The Home Of Marvel
                </h1>
            </div>
            <div>
                <img src="https://as01.epimg.net/en/imagenes/2021/09/01/latest_news/1630531505_253754_1630532607_noticia_normal_recorte1.jpg"
                     alt="Marvel Character Image"
                     className="main-image"/>
            </div>
        </div>
    );
}
export default SearchBar;