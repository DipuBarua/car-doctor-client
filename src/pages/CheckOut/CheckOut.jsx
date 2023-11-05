import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contextProviders/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleCheckOut = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const email = form.email.value;
        // const email = user?.email;
        const message = form.message.value;

        const order = {
            customer_name: name,
            due_price: price,
            img,
            phone,
            email,
            service: title,
            service_id: _id,
            message
        };
        console.log(order);

        fetch("https://car-doctor-server-lemon-ten.vercel.app/bookings", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h2 className=" py-5 text-center text-2xl font-bold bg-gray-200">Book Service: {title}</h2>

            <form onSubmit={handleCheckOut} className="card-body bg-gray-100">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className=" space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" defaultValue={"$" + price} className="input input-bordered" required />
                        </div>
                    </div>

                    <div className=" space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone Number</span>
                            </label>
                            <input type="text" name="phone" placeholder="phone number" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <input type="text" name="message" placeholder="Write your message..." className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-block">Order Confirm</button>
                </div>
            </form>

        </div>
    );
};

export default CheckOut;