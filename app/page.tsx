import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-[url('/cover.jpg')] bg-center bg-cover">
      <Header />
      <div className="mx-auto flex h-screen w-11/12 items-center justify-center ">
        <div className="">
          <div className=" text-center gap-7 flex flex-col">
            <span className="text-red-600 text-4xl font-bold">
              4 Beach Rentals for the summer (Long and short term)
            </span>

            <span className="text-2xl font-bold text-gray-500">
              3 houses from Beach! Brand new and newly renovated!
            </span>
            <span className="text-2xl font-bold text-gray-500">
              (Total 12 bedrooms on 4 Units rent 2,3 or 4 Bedrooms or rent them
              all)
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
