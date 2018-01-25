import React from 'react';
import PeopleCards from './PeopleCards';

class PeopleCardsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: []
        }
    }

    componentDidMount() {
        fetch("http://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(object => {
                let peoples = object.map((people, id) => {
                    return (
                        <PeopleCards
                            key={id}
                            name={people.name}
                            gender={people.gender}
                            age={people.age}
                            hair_color={people.hair_color}
                            eye_color={people.eye_color}
                            link={people.id} />
                    )
                })
                this.setState({ peoples: peoples })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="row">{this.state.peoples}</div>
        )
    }
}

export default PeopleCardsList;