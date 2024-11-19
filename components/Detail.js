import Image from "next/image";
import Button from "./Button";
import { Sheet } from "@/components/ui/sheet";
import { Button as ShadCNButton } from "@/components/ui/button";
import { Minus, Pencil, Plus, Trash2Icon } from "lucide-react";

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
    <section className="z-50 sticky top-0 h-[100vh] flex flex-col md:bg-white md:p-4  ">
      <Sheet>
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
                className="rounded-lg aspect-[1/1] object-cover border-2 border-solid"
              />
              <div className="ml-3 w-full">
                <p className="text-sm  line-clamp-2">{item.title}</p>
                <div className="flex justify-center items-center mt-5">
                  <div className="flex justify-center  items-center">
                    <ShadCNButton variant="outline" size="xs">
                      <Minus />
                    </ShadCNButton>
                    <p className="text-sm mx-2 text-black">{item.increase}</p>
                    <ShadCNButton variant="outline" size="xs">
                      <Plus />
                    </ShadCNButton>
                  </div>
                  <p className="ml-10 mr-2  text-primary text-sm ">
                    {item.price}
                  </p>
                  <ShadCNButton variant="ghost">
                    <Trash2Icon className="text-red-600" />
                  </ShadCNButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {/* Subtotal */}
          <div className="mt-4 border-t pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <p className="text-black">Subtotal</p>
              <p className=" text-red-600">$742.00</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-black">Discount sales</p>
              <p className=" text-red-600">-$4.00</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-black">Total sales tax</p>
              <p className=" text-red-600">$2.00</p>
            </div>
            <div className="flex justify-between text-lg mt-4 pt-4 border-t font-bold">
              <p className="text-black">Total</p>
              <p className="text-red-600">$740.00</p>
            </div>
          </div>

          {/* Pay Now Button */}
          <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-primary/90">
            Pay Now
          </button>
          {/* <Button text='Pay Now'/> */}
        </div>
      </Sheet>
    </section>
  );
}
