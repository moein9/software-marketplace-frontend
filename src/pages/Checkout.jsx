import { useSelector } from "react-redux";
import { useState } from "react";

function Checkout() {
  const cartItems = useSelector((state) =>
    state.cart ? state.cart.items : []
  );

  console.log(cartItems);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleShippingInfoChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentInfoChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePlaceOrder = () => {
    // for placeorder
  };

  return (
    <div className="flex flex-col container mx-auto py-8">
      <h2 className=" p-4 m-4 text-2xl font-bold mb-4 bg-slate-100 rounded-full ">
        {" "}
        Items:
      </h2>
      <div className="p-8 m-8">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={item.product.id}
            >
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">{item.product.name}</h2>
                <p className="text-gray-600 mb-8">{item.product.description}</p>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">cartItems Details:</h3>
                <ul>
                  <li>
                    <strong>Price:</strong> ${item.product.price}
                  </li>
                  <li>
                    <strong>Category:</strong> {item.product.category}
                  </li>
                  <li>
                    <strong>Brand:</strong> {item.product.brand}
                  </li>
                  <li>
                    <strong>Availability:</strong>{" "}
                    {item.product.inStock ? "In Stock" : "Out of Stock"}
                  </li>
                </ul>
                <div className="flex items-center mt-4">
                  <label htmlFor="quantity" className="mr-2 font-bold">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="border border-gray-500 px-2 py-1 w-16 rounded-lg"
                    min="1"
                    max={item.product.inStock}
                    value={item.quantity}
                    onChange={(e) => {
                      const quantity = e.target.valueAsNumber;
                      item.quantity = quantity;
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>there is no items in your cart</h1>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-4 p-4">Checkout</h2>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2"> Information</h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={shippingInfo.name}
                  onChange={handleShippingInfoChange}
                  className="border border-gray-500 px-2 py-1 w-full rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleShippingInfoChange}
                  className="border border-gray-500 px-2 py-1 w-full rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleShippingInfoChange}
                    className="border border-gray-500 px-2 py-1 w-full rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="state"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={shippingInfo.state}
                    onChange={handleShippingInfoChange}
                    className="border border-gray-500 px-2 py-1 w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="zip"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Zip
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={shippingInfo.zip}
                  onChange={handleShippingInfoChange}
                  className="border border-gray-500 px-2 py-1  rounded-lg"
                />
              </div>
            </form>
          </div>
          <div className="p-4 m-4">
            <h3 className="text-lg font-bold mb-2">Payment Information</h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={paymentInfo.name}
                  onChange={handlePaymentInfoChange}
                  className="border border-gray-500 px-2 py-1 w-full rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cardNumber"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={handlePaymentInfoChange}
                  className="border border-gray-500 px-2 py-1 w-full rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="expirationDate"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expirationDate"
                    name="expirationDate"
                    value={paymentInfo.expirationDate}
                    onChange={handlePaymentInfoChange}
                    className="border border-gray-500 px-2 py-1 w-full rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cvv"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentInfoChange}
                    className="border border-gray-500 px-2 py-1 w-full rounded-lg"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="flex justify-end mt-4">
        {cartItems.length > 0 ? (
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
