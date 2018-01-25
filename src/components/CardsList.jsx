import React from 'react';
import FilmCardsList from './FilmCardsList';
import PeopleCardsList from './PeopleCardsList';
import 'isomorphic-fetch';
import 'es6-promise';

class CardsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoaded: false,
            filmsLoaded: false,
            peopleLoaded: false
        }
    }

    toggleFilmsLoad(event) {
        this.setState({ pageLoaded: true, filmsLoaded: true, peopleLoaded: false })
    }

    togglePeople(event) {
        this.setState({ pageLoaded: true, filmsLoaded: false, peopleLoaded: true })
    }

    render() {

        if (this.state.pageLoaded === false) {
            return (
                <React.Fragment>
                    <div className="row justify-content-center">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg mb-4 mr-5"
                            onClick={(event) => { this.toggleFilmsLoad(event) }}>Load Films</button>
                        <button
                            type="button"
                            className="btn btn-primary btn-lg mb-4 ml-5"
                            onClick={(event) => { this.togglePeople(event) }}>Load People</button>
                    </div>
                </React.Fragment>
            )
        } else if (this.state.filmsLoaded === true) {
            return (
                <React.Fragment>
                    <div className="row justify-content-center">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg mb-4 mr-5 ml-5"
                            onClick={(event) => { this.togglePeople(event) }}>Load People</button>
                        <FilmCardsList />
                    </div>
                </React.Fragment>
            )
        } else if (this.state.peopleLoaded === true) {
            return (
                <React.Fragment>
                    <div className="row justify-content-center">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg mb-4 mr-5 ml-5"
                            onClick={(event) => { this.toggleFilmsLoad(event) }}>Load Films</button>
                        <PeopleCardsList />
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default CardsList;

