import React from "react";
import { FaCheck } from "react-icons/fa";

const pricingData = [
  {
    title: "Basic Plan",
    price: "$9.99",
    features: [
      "Access to all basic features",
      "Limited Support",
      "1 user license",
    ],
  },
  {
    title: "Pro Plan",
    price: "$19.99",
    features: [
      "Access to all basic and advanced features",
      "Priority Support",
      "Up to 5 user licenses",
    ],
  },
  {
    title: "Enterprise Plan",
    price: "Contact Us",
    features: [
      "Customized Features",
      "Dedicated Support",
      "Unlimited user licenses",
    ],
  },
];

function Pricing() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose a plan that fits your needs.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.title}
                </h3>
                <p className="mt-4 text-base text-gray-500">{plan.price}</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheck className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-500">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-2 rounded">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
