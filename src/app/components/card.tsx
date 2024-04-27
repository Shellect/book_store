import {CardsType} from "../lib/definitions";
import Image from "next/image";

export default function Card({title, author, image} : CardsType) {
    return (
        <div className="col">
            <div className="card h-100">
                <Image src={image} alt="" className="card-img-top" />
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