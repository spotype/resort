export default function Booknow() {
  return (
    <div className="bg-[#f7f7f7] py-16">
      <div className="flex mx-auto w-11/12 justify-center xl:w-[1200px]">
        <div className="w-full flex flex-col items-center">
          <div className="w-full mb-10">
            <h2 className="font-bold text-2xl text-center text-red-600">
              Book now
            </h2>
          </div>

          <div className="text-center">
            <p>Deposit $500 to "Shore Rentals"</p>
            <p>PO Box 202 Ridgewood, NJ 07451</p>

            <div>
              <p>We will send you the lease and payment plan.</p>
            </div>
          </div>

          <div className="my-16 flex w-full justify-center">
            <span className="">OR</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="mb-10">
              <h2 className="font-bold text-xl">Contact us:</h2>
            </div>
            <div className="flex flex-col items-center font-bold text-lg gap-3">
              <div className="flex gap-2">
                <img src="/call.svg" className="w-5" alt="" />
                <span>(732) 278-4355</span>
              </div>
              <div className="flex gap-2">
                <img src="/msg.svg" className="w-5" alt="" />
                <span>seasideheights16@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
