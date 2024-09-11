"use client";
import {CardsType} from "@/lib/definitions";
import Image from "next/image";
import {selectBook} from "@/app/actions";

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
                    <input type="button" value="Add to cart" className="btn btn-warning me-1" onClick={() => selectBook(id)} />
                    <button type="button" className="btn btn-outline-warning"><i className="bi bi-heart"></i></button>
                </div>
            </div>
        </div>
    );
}
