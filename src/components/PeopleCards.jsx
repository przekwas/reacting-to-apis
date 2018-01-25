import React from 'react';

const PeopleCards = (props) => {
    return (
        <div className="col-sm-6">
            <div className="card mb-5">
                <img className="card-img-top" src={require("../characters.jpg")} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-header">{props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Age: {props.age}</li>
                        <li className="list-group-item">Gender: {props.gender}</li>
                        <li className="list-group-item">Hair Color: {props.hair_color}</li>
                        <li className="list-group-item">Eye Color: {props.eye_color}</li>
                        <li className="list-group-item text-center"><a href={"http://ghibliapi.herokuapp.com/people/" + props.link} target="_blank" className="btn btn-secondary mt-2">Go to their JSON</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default PeopleCards;


