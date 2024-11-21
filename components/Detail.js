import Image from "next/image";
import Button from "./Button";
import { Sheet } from "@/components/ui/sheet";
import { Button as ShadCNButton } from "@/components/ui/button";
import { Minus, Pencil, Plus, Trash2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
    <section className="z-40 sticky top-0  h-[90vh] md:h-[100vh]  flex flex-col md:bg-white md:p-4  ">
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
                <p className="text-sm max-w-32 line-clamp-2">{item.title}</p>
                <div className="flex justify-center items-center mt-5">
                  <div className="flex justify-center mr-1 items-center">
                    <ShadCNButton variant="outline" size="xs">
                      <Minus />
                    </ShadCNButton>
                    <p className="text-sm mx-2 text-black">{item.increase}</p>
                    <ShadCNButton variant="outline" size="xs">
                      <Plus />
                    </ShadCNButton>
                  </div>
                  <ShadCNButton
                    variant="secondary"
                    size="icon"
                    className="px-10 "
                  >
                    <Trash2Icon className="text-red-600 " />
                  </ShadCNButton>
                  <p className="ml-2  text-primary text-sm ">{item.price}</p>
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
              <div className="flex items-center border border-gray-300 rounded">
                <span className="text-red-600 px-2">$</span>
                <input
                  type="number"
                  id="received-dollar"
                  className="text-red-600 outline-none w-20 text-end no-spinner "
                  placeholder="0.00"
                />
              </div>
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

          <AlertDialog>
            <AlertDialogTrigger className="w-full">
              <ShadCNButton
                size="mySize"
                variant="myStyle"
                className="mt-4 w-full mb-2 bg-primary text-white p-2 rounded-lg hover:bg-primary/90"
              >
                Pay Now
              </ShadCNButton>
            </AlertDialogTrigger>

            {/* Payment Arlert */}
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogDescription>
                  <div>
                    <h1 className="text-2xl text-black font-bold text-center mb-4">
                      Payment
                    </h1>
                    <hr className="my-4 border-black" />
                    <div>
                      {/* Total Amount */}
                      <div className=" max-w-full subBgpayMent p-4 rounded-lg text-center ">
                        <div className="text-3xl py-2 bg-payMent text-white rounded-lg">
                          $50
                        </div>
                        <div className="text-black mt-3 text-lg">
                          20000.00 <span>រៀល</span>
                        </div>
                      </div>

                      {/* Customer */}
                    </div>

                    {/* Payment Method */}
                    <div className="grid grid-cols-7 space-x-2 gap-6 justify-between items-center my-3">
                      <div className="col-span-4 sm:col-span-4">
                        <p className="text-gray-700​ text-start">
                          Payment Method
                        </p>
                        <div className="grid grid-cols-3 sm:flex space-x-2">
                          <ShadCNButton variant="base">
                            <Image
                              src="/images/dollar.png"
                              width={15}
                              height={15}
                              alt="image"
                            ></Image>
                            <p> Cash</p>
                          </ShadCNButton>
                          <ShadCNButton variant="base">
                            <Image
                              src="/images/credit.png"
                              width={15}
                              height={15}
                              alt="image"
                            ></Image>
                            <p> Card</p>
                          </ShadCNButton>
                          <ShadCNButton variant="base">
                            <Image
                              src="/images/abaPay.png"
                              width={15}
                              height={15}
                              alt="image"
                            ></Image>
                            <p> ABA</p>
                          </ShadCNButton>
                        </div>
                      </div>

                      <div className="col-span-3 sm:col-span-3">
                        <label
                          htmlFor="customer"
                          className="block text-start text-gray-700 font-medium mb-1"
                        >
                          Customer:
                        </label>

                        <select
                          id="customer"
                          className="w-full p-1 border border-gray-300 "
                        >
                          <option value="">N/A</option>
                          <option value="customer1">Customer 1</option>
                          <option value="customer2">Customer 2</option>
                        </select>
                      </div>
                    </div>

                    <hr className="my-4 border border-[#4d489d] max-w-72 mx-auto border-dashed " />
                    <section className="grid grid-cols-7 gap-2 sm:gap-6">
                      <div className="col-span-7 sm:col-span-4 ">
                        {/* Received Amount */}
                        <div className="mb-4">
                          <label
                            htmlFor="received-dollar"
                            className="block text-black text-[16px] font-medium mb-1 text-start"
                          >
                            Received In Dollar
                          </label>
                          <input
                            type="number"
                            id="received-dollar"
                            className="w-full text-[16px] border-2 text-red-600 border-black p-2 rounded-lg shadow-sm "
                            placeholder="$"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="received-khmer"
                            className="block text-black text-[16px] font-medium mb-1 text-start"
                          >
                            Received In Khmer
                          </label>
                          <input
                            type="number"
                            id="received-khmer"
                            className="w-full text-[16px] border-2 text-red-600 border-black p-2 rounded-lg shadow-sm "
                            placeholder="៛"
                          />
                        </div>
                      </div>
                      {/* Return Amount */}
                      <div className="col-span-7 sm:col-span-3">
                        <p className="text-black text-[16px] mb-1">Return:</p>
                        <div className="subBgpayMent text-black p-4 rounded-lg ">
                          <div className="flex justify-between text-[16px] items-center py-4">
                            <p>Dollar: </p>
                            <p> 2.00 </p>
                            <p> Dollar </p>
                          </div>
                          <div className="flex justify-between text-[16px] items-center py-4">
                            <p>រៀល: </p>
                            <p> 8,000 </p>
                            <p> រៀល </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <AlertDialogFooter className="mt-10">
                    <AlertDialogCancel className="text-black  border hover:text-white">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="text-black  border border-red-600 hover:text-white">
                      Pay
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Sheet>
    </section>
  );
}
