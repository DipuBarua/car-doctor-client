
const ServiceCard = ({ service }) => {
    const { title, img, price, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure><img src={img} alt="" /></figure>
            <div className=" space-y-2 my-3">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center text-orange-600">
                    <p>Price: ${price}</p>
                    <button className="btn btn-ghost text-xl text-orange-600">-></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;