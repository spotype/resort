import features from "@/utils/features";

export default function Features() {
  const feature = features();
  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto flex w-11/12">
        <div className="w-full flex flex-col">
          <div className="flex w-full flex-col justify-center items-center ">
            <h2 className="font-bold text-2xl text-red-600 my-16 ">
              Features and Amenities
            </h2>

            <div>
              <div className="grid grid-cols-2 gap-10 items-start justify-center">
                {feature.map(function (res) {
                  return (
                    <div className="flex flex-col gap-3 items-center">
                      <div>
                        <img src={res.url} className="w-10" alt="" />
                      </div>
                      <div className="flex">
                        <span className="text-center text-gray-600">
                          {res.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
