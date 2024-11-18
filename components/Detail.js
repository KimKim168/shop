import Image from "next/image";
import Button from "./Button";

export default function Detail({ details }) {
  if (!details || details.length === 0) {
    return (
      <section className="z-50 sticky top-4">
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-bold mb-4">Order Details</h2>
          <p className="text-gray-600 text-center">No items to display</p>
        </div>
      </section>
    );
  }

  return (
    <section className="z-50 sticky top-0 h-[100vh] flex flex-col bg-white p-4 ">
      <h2 className="w-full text-lg font-bold mb-4">Order Details</h2>
      <div className="space-y-4 border-t flex-1 overflow-auto pr-2 custom-scrollbar">
        {details.map((item, index) => (
          <div key={index} className="flex pt-4">
            <Image
              src={item.image} // Replace with your actual image path
              alt={item.title || "Image description"} // Provide meaningful alt text
              width={90}
              height={90}
              objectFit="center"
              className="rounded-lg aspect-square object-contain border-2 border-solid"
            />
            <div className="ml-3 w-full">
              <p className="text-sm font-semibold  line-clamp-2">
                {item.title}
              </p>
              <div className="flex justify-center items-center mt-5">
                <p className="text-sm text-gray-500">{item.increase}</p>
                <p className="ml-auto font-semibold text-blue-600">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* Subtotal */}
        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between text-sm">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold">$742.00</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-600">Discount sales</p>
            <p className="font-semibold text-red-600">-$4.00</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-600">Total sales tax</p>
            <p className="font-semibold">$2.00</p>
          </div>
          <div className="flex justify-between text-lg mt-3 font-bold">
            <p>Total</p>
            <p>$740.00</p>
          </div>
        </div>

        {/* Pay Now Button */}
        <button className="w-full mt-4 bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700">
          Pay Now
        </button>
        {/* <Button text='Pay Now'/> */}
      </div>
    </section>
  );
}
