import React from "react";

export default function Card({title, author, image}) {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{author}</p>
                </div>
                <div className="card-footer">
                    <input type="button" value="Select" className="btn btn-success" />
                </div>
            </div>
        </div>
    );
}