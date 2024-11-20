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
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogDescription>
                  <div className="mx-auto max-w-md space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                    {/* Payable Amount */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        PAYABLE AMOUNT
                      </p>
                    </div>

                    <hr className="border-gray-300 dark:border-gray-700" />

                    {/* Add Tip */}
                    {/* <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        ADD TIP
                      </p>
                      <div className="mt-2 flex gap-2">
                        {["$5", "$10", "$15", "$20"].map((tip, index) => (
                          <button
                            key={index}
                            className={`flex-1 rounded-md border border-gray-300 bg-gray-100 p-2 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 ${
                              tip === "$5" ? "bg-gray-200 dark:bg-gray-600" : ""
                            }`}
                          >
                            {tip}
                          </button>
                        ))}
                      </div>
                    </div> 

                    <hr className="border-gray-300 dark:border-gray-700" />*/}

                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        PAYMENT METHOD
                      </p>
                      <div className="mt-2 flex gap-2">
                        {/* {["Cash", "Card", "Voucher"].map((method, index) => (
                          <button
                            key={index}
                            className={`flex-1 rounded-md border border-gray-300 p-3 text-sm font-medium text-gray-900 dark:border-gray-600 dark:text-white ${
                              method === "Cash"
                                ? "bg-gray-200 dark:bg-gray-600"
                                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                            }`}
                          >
                            {method}
                          </button>
                        ))} */}
                        <ShadCNButton variant="secondary" size="mySize">
                          <Image
                            src="/images/dollar.png"
                            width={20}
                            height={20}
                            alt="image"
                          ></Image>
                          <p>Cash</p>
                        </ShadCNButton>
                        <ShadCNButton variant="secondary" size="mySize">
                          <Image
                            src="/images/credit.png"
                            width={20}
                            height={20}
                            alt="image"
                          ></Image>
                          <p>Card</p>
                        </ShadCNButton>
                        <ShadCNButton variant="secondary" size="mySize">
                          <Image
                            src="/images/abaPay.png"
                            width={20}
                            height={20}
                            alt="image"
                          ></Image>
                          <p>ABA</p>
                        </ShadCNButton>
                      </div>
                    </div>

                    {/* Add Cash Received */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        ADD CASH RECEIVED
                      </p>
                      <div className="flex items-center justify-between rounded-md border border-gray-300 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
                        <input
                          type="text"
                          placeholder="50"
                          className="w-full border-none bg-transparent  text-lg font-medium text-gray-900 placeholder-gray-500 focus:ring-0 dark:text-white"
                        />
                        <select
                          className=" bg-transparent border-none text-center text-lg  text-gray-900 dark:text-white focus:outline-none focus:ring-0"
                          defaultValue="USD"
                        >
                          <option value="USD">$</option>
                          <option value="EUR">៛</option>
                        </select>
                      </div>
                    </div>

                    <hr className="border-gray-300 dark:border-gray-700" />

                    {/* Summary */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-gray-900 dark:text-gray-400">
                        <span>Cash Received</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          $50.00
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-900 dark:text-gray-400">
                        <span>Total</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          $45.00
                        </span>
                      </div>
                    </div>

                    <hr className="border-gray-300 dark:border-gray-700" />

                    {/* Total */}
                    <div className="flex items-center justify-between text-sm text-gray-900 dark:text-gray-400">
                      <span>Change </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        $5.00
                      </span>
                    </div>
                    <hr className="border-gray-300 dark:border-gray-700" />
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Sheet>
    </section>
  );
}
