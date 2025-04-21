import Image from "next/image";
import ProfilePicture from "@/public/profile_picture_2.jpg";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";

export default function LandlordDetailPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4 ">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <Image
              src={ProfilePicture}
              alt="Landlord name"
              width={200}
              height={200}
              className="rounded-full"
            />

            <h1 className="mt-6 text-3xl">Landlord Name</h1>

            <ContactButton />
          </div>
        </aside>

        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <PropertyList />
          </div>
        </div>
      </div>
    </main>
  );
}
