import house from "@/utils/house";
import Link from "next/link";

export default function Product() {
  const houseData = house();
  return (
    <div className="py-16">
      <div className="flex mx-auto w-11/12 lg:w-[1000px] md:w-[768px]  items-center justify-center xl:w-[1200px]">
        <div className=" w-full">
          <div className="mb-10">
            <h2 className="text-center font-bold text-2xl text-gray-600">
              Please see our customer reviews below
            </h2>
          </div>

          <div className="flex flex-col gap-16 sm:gap-5 w-full items-center justify-center sm:grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
            {houseData.map((res) => {
              return (
                <div className="bg-white shadow-lg sm:w-[560px] md:w-full rounded-xl w-full 2xl:w-96">
                  <div className="">
                    <img
                      src={res.image}
                      alt=""
                      className="rounded-t-xl h-56 w-full object-cover object-top"
                    />
                    <div className="p-5">
                      <div className="py-4">
                        <span className=" font-bold text-2xl">{res.title}</span>

                        <div className="flex flex-col gap-5 mt-3">
                          <div className="flex gap-2">
                            <img src="/location.svg" className="w-5" alt="" />
                            <span>Farragut Ave Seaside Park, NJ</span>
                          </div>

                          <div className="flex w-full justify-between items-center">
                            <div className="flex flex-col items-center">
                              <img
                                src="/apartment.svg"
                                className="w-8"
                                alt=""
                              />
                              <span>House</span>
                            </div>

                            <div className="w-[2px] h-10 bg-slate-400"></div>

                            <div className="flex flex-col items-center">
                              <img src="/user.svg" className="w-8" alt="" />
                              <span>House</span>
                            </div>

                            <div className="w-[2px] h-10 bg-slate-400"></div>

                            <div className="flex flex-col items-center">
                              <img src="/bed.svg" className="w-8" alt="" />
                              <span>House</span>
                            </div>

                            <div className="w-[2px] h-10 bg-slate-400"></div>

                            <div className="flex flex-col items-center">
                              <img
                                src="/birthroom.svg"
                                className="w-8"
                                alt=""
                              />
                              <span>House</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div>
                            <span className="font-bold text-lg">From</span>

                            <div className="mt-2 flex flex-col">
                              <div className="flex flex-col gap-2">
                                <span className="font-bold text-xl text-blue-900">
                                  {res.price}
                                </span>
                                <span className="font-semibold">
                                  Additional charges may apply
                                </span>
                              </div>

                              <div className="w-full flex mt-4">
                                <Link
                                  href={""}
                                  className="w-full py-4 text-center sm:py-4 sm:px-6 bg-blue-600 font-bold text-white rounded-lg"
                                >
                                  View deal
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

{
  /* {houseData.map(function (res) {
              return (
                <Link href={`/details/${res.id}`}>
                  <div
                    key={res.id}
                    className="w-full bg-white flex flex-col gap-5 text-center md:flex-row rounded-2xl md:grid md:grid-cols-2 lg:w-[768px] sm:w-[468px] md:w-[550px] transition-all duration-500"
                    style={{
                      boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    }}
                  >
                    <img
                      src={res.image}
                      alt=""
                      className="w-full rounded-t-2xl h-60 object-cover object-center md:h-full md:rounded-bl-xl md:rounded-tl-xl"
                    />
                    <div className="flex flex-col items-center gap-5 pb-8 md:items-center md:justify-center md:p-0 md:py-4">
                      <span className="font-bold text-xl">{res.title}</span>
                      <p className="text-sm text-gray-500 font-semibold w-40">
                        {res.status}
                      </p>
                      <p className="text-sm text-gray-500 font-semibold w-40">
                        {res.locations}
                      </p>
                      <p className="font-bold text-xl">{res.price}</p>
                      <div className="mt-3 md:m-0 md:mb-2">
                        <Link
                          href={""}
                          className="py-2 px-4 border-2 border-blue-500 text-blue-500 rounded-md text-base"
                        >
                          See availability
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })} */
}
