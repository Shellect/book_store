"use client";
import {CardsType} from "../lib/definitions";
import Image from "next/image";

function selectBook(id) {
    const books = JSON.parse(localStorage.getItem("cart")) || {};
    books[id] = (books[id] || 0) + 1;

    localStorage.setItem("cart", JSON.stringify(books));
}

export default function Card({id, title, author, image} : CardsType) {
    return (
        <div className="col">
            <div className="card h-100">
                <Image src={image} alt="" className="card-img-top" width={310} height={490}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{author}</p>
                </div>
                <div className="card-footer">
                    <input type="button" value="Select" className="btn btn-success" onClick={() => selectBook(id)} />
                </div>
            </div>
        </div>
    );
}
