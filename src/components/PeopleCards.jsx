import React from 'react';

const PeopleCards = (props) => {
    return (
        <div className="col-sm-6">
            <div className="card mb-5">
                <img className="card-img-top" src={require("../characters.jpg")} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Age: {props.age} | Gender: {props.gender}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Hair Color: {props.hair_color} | Eye Color: {props.eye_color}</h6>
                    <a href={"http://ghibliapi.herokuapp.com/people/" + props.link} target="_blank" class="btn btn-primary">Go to their JSON</a>
                </div>
            </div>
        </div>
    )
}

export default PeopleCards;