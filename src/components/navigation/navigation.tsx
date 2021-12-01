import React, { ReactElement, MouseEvent } from 'react'

interface Props {
    setSelectedCategory: (value: string) => void;
}

const FilterMovieCategory = (props: Props): ReactElement => {
    const onClick = (event: MouseEvent): void => {
        props.setSelectedCategory((event.target as HTMLAnchorElement).dataset.id ?? "")
    };

    return (
        <div className="flex-container">
            <nav className="nav">
                <ul>
                    <li>
                        <a data-id="all" onClick={onClick}>All Movies</a>
                    </li>
                    <li>
                        <a data-id="Phase One" onClick={onClick}>Phase One Movies</a>
                    </li>
                    <li>
                        <a data-id="Phase Two" onClick={onClick}>Phase Two Movies</a>
                    </li>
                    <li>
                        <a data-id="Phase Three" onClick={onClick}>Phase Three Movies</a>
                    </li>
                    <li>
                        <a data-id="Phase Four" onClick={onClick}>Phase Four Movies</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default FilterMovieCategory;