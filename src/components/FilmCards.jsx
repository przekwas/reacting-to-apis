import React from 'react';

const FilmCards = (props) => {
    return (
        <div className="col-sm-6">
            <div className="card mb-5">
                <img className="card-img-top" src={require("../characters2.jpg")} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.release_date} | RT Score: {props.rt_score}</h6>
                    <p className="card-text">{props.description}</p>
                    <p className="text-muted">Director: {props.director} | Producer: {props.producer}</p>
                </div>
            </div>
        </div>
    )
}

export default FilmCards;