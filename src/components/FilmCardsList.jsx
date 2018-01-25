import React from 'react';
import FilmCards from './FilmCards';

class FilmCardsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch("http://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(object => {
                let films = object.map((film, id) => {
                    return (
                        <FilmCards
                            key={id}
                            title={film.title}
                            description={film.description}
                            release_date={film.release_date}
                            rt_score={film.rt_score}
                            director={film.director}
                            producer={film.producer} />
                    )
                })
                this.setState({ films: films })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="row">{this.state.films}</div>
        )
    }
}

export default FilmCardsList;