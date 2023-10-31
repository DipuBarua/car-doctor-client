import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="" /></figure>
            <div className=" space-y-2 my-3">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center text-orange-600">
                    <p>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-ghost text-xl text-orange-600">-></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;