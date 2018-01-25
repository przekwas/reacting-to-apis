import React from 'react';
import Cards from './Cards';
import 'isomorphic-fetch';
import 'es6-promise';

class CardsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            films: []
        }
    }

    componentDidMount() {
        fetch("http://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(object => {
                let films = object.map((film, id) => {
                    return (
                        <Cards 
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
            <div className="row">{this.state.films}></div>
        )
    }
}

export default CardsList;