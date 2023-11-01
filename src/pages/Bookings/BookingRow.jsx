
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    console.log(booking);
    const { _id, customer_name, img, email, phone, service, due_price, message, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-16">
                            {
                                img && <img src={img} alt="service.png" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer_name}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
                <br />
                <span className="badge badge-ghost badge-sm">{message}</span>
            </td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{due_price}</td>
            <th>
                {
                    status === 'confirm' ? <span className=" text-blue-700 underline font-bold"> Confirmed </span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-warning btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;