import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, price, title, img } = service;
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const price = form.price.value;

    const bookings = {
      customerName: name,
      service: title,
      service_id: _id,
      date,
      img,
      email,
      price,
    };
    console.log(bookings);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="p-14  bg-base-200">
      <h2 className="text-3xl font-bold text-center">Book Service: {title}</h2>
      <form onSubmit={handleSubmit}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={user?.displayName}
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" className="input input-bordered" name="date" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              defaultValue={user?.email}
              name="email"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              name="price"
              defaultValue={"$" + price}
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
