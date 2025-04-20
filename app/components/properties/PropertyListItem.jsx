import Image from "next/image";
import BeachImage from "@/public/beach_1.jpg";

export default function PropertyListItem() {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={BeachImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="hover:scale-110 object-cover transition h-full"
          alt="Beach House"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">Property name</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>$200</strong> per night
        </p>
      </div>
    </div>
  );
}
