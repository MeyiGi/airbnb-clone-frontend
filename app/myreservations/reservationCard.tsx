import Image from "next/image";
import BeachImage from "@/public/beach_1.jpg";

export default function ReservationCard() {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
      <div className="col-span-1">
        <div className="relative overflow-hidden aspect-square rounded-xl">
          <Image
            src={BeachImage}
            alt="Beach - Image"
            className="hover:scale-110 object-cover transition h-full w-full"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-3">
        <h2 className="my-6 text-xl">Property Name</h2>

        <p className="mb-2">
          <strong>Check in date:</strong> 14/2/2024
        </p>
        <p className="mb-2">
          <strong>Check out date:</strong> 16/2/2024
        </p>
        <p className="mb-2">
          <strong>Number of nights:</strong> 2
        </p>
        <p className="mb-2">
          <strong>Total price:</strong> $200
        </p>

        <div className="inline-block cursor-pointer  py-4 px-6 bg-[#ff385c] hover:bg-[#d50027] text-white rounded-xl">Go to Property</div>
      </div>
    </div>
  );
}
