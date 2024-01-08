import Buttons from "./Buttons";
import Maps from "./Maps";

export default function documents() {
  return (
    <div className="py-16">
      <div className="mx-auto flex w-11/12">
        <div className="w-full">
          <div className="flex items-center justify-center mt-5 mb-14">
            <h2 className="font-bold text-red-600 text-center text-2xl">
              How to Book
            </h2>
          </div>

          <div className=" w-full p-3 bg-[#d1ecf1] rounded-lg pr-10">
            <span className="font-semibold text-gray-600">
              You can come visit anytime. No appointment necessary.
            </span>
          </div>

          <div className="my-10 flex flex-col gap-2">
            <div className="flex gap-1">
              1.
              <div>
                Please review calendar, pictures, and video before booking. Any
                questions please call or email.
              </div>
            </div>
            <div className="flex gap-1">
              2.
              <div>
                Send $500 deposit to "Shore Rentals" PO Box 202, Ridgewood NJ
                07451.
              </div>
            </div>
            <div className="flex gap-1">
              3.<div>We will email you the lease and pay plan.</div>
            </div>

            <div className="my-4">
              <span>
                Combination locks are available nad will be given to you when
                you are going to see the property
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center">
            <Buttons />
          </div>

          <div className="my-10">
            <Maps />
          </div>
        </div>
      </div>
    </div>
  );
}
