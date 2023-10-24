import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
            <div className=" space-y-3 p-4">
                <h2 className=" text-center text-2xl text-orange-600 font-bold">Service</h2>
                <h1 className=" text-center text-5xl font-bold">Our Service Area</h1>
                <p className=" text-center py-6 mx-64">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                </p>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;