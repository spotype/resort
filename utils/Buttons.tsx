import Link from "next/link";
export default function Buttons() {
  return (
    <div className="flex flex-col">
      <div>
        <Link href={""} className="py-1 px-2 bg-blue-500">
          Payment plan sample
        </Link>
      </div>
      <div>
        <Link href={""} className="">
          Lease sample
        </Link>
      </div>
    </div>
  );
}
