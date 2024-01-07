import house from "@/utils/house";
import Link from "next/link";

export default function Product() {
  const houseData = house();
  return (
    <div className="py-16">
      <div className="flex mx-auto w-11/12 items-center justify-center">
        <div className=" w-full">
          <div className="mb-10">
            <h2 className="text-center font-bold text-2xl text-gray-600">
              Please see our customer reviews below
            </h2>
          </div>

          <div className="flex flex-col gap-16 p-5">
            {houseData.map(function (res) {
              return (
                <div
                  key={res.id}
                  className="w-full bg-white flex flex-col gap-5 text-center"
                  style={{
                    borderRadius: "1.5rem",
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                  }}
                >
                  <img
                    src={res.image}
                    alt=""
                    className="w-full h-60 object-cover object-center"
                    style={{
                      borderRadius: "1.5rem 1.5rem 0 0",
                    }}
                  />
                  <div className="flex flex-col items-center gap-5 pb-8">
                    <span className="font-bold text-xl">{res.title}</span>
                    <p className="text-sm text-gray-500 font-semibold w-40">
                      {res.status}
                    </p>
                    <p className="text-sm text-gray-500 font-semibold w-40">
                      {res.locations}
                    </p>
                    <p className="font-bold text-xl">{res.price}</p>
                    <div className="mt-3">
                      <Link
                        href={""}
                        className="py-2 px-4 border-2 border-blue-500 text-blue-500 rounded-md text-base"
                      >
                        See availability
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
