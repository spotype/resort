import review from "@/utils/review";

export default function page() {
  const data = review();
  return (
    <div>
      <div>
        <div className="flex flex-col gap-24 items-center">
          {data.map((res) => {
            return (
              <div className="w-[400px] bg-white shadow-xl flex flex-col items-center pt-16 pb-5 gap-5 px-2 rounded-xl relative border-2">
                <div className=" absolute -top-20">
                  <img
                    src="/photo.webp"
                    className="w-36 rounded-full h-36 object-cover object-top border-2 shadow-xl z-40"
                    alt=""
                  />
                </div>
                <span className="flex">
                  <img src="/star.svg" className="w-5" alt="" />
                  <img src="/star.svg" className="w-5" alt="" />
                  <img src="/star.svg" className="w-5" alt="" />
                  <img src="/star.svg" className="w-5" alt="" />
                  <img src="/star.svg" className="w-5" alt="" />
                </span>
                <span className="text-2xl">{res.othor}</span>

                <div className="w-full bg-blue-400 mx-3 text-justify p-4 rounded-xl">
                  <span className=" text-sm">{res.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
