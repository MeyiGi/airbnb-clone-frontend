import Image from "next/image";
import BeachImage from "@/public/beach_1.jpg";
import ProfilePicture from "@/public/profile_picture_2.jpg";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";


export default function PropertyDetailPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image
            fill
            src={BeachImage}
            className="object-cover w-full h-full"
            alt="Beach House"
        />
      </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-3 py-6 pr-6">
                <h1 className="mb-4 text-4xl">Property Name</h1>

                <span className="mb-6 block text-lg text-gray-600">
                    4 guests - 2 bedrooms - 1 bathrooms
                </span>

                <hr className="text-gray-200"/>

                <div className="py-6 flex items-center space-x-4">
                    <Image 
                        src={ProfilePicture}
                        alt="profile picture"
                        width={50}
                        height={0}
                        className="rounded-full"
                        />

                    <p><strong>Daniel Kanybekov</strong> is your host</p>
                </div>

                <hr className="text-gray-200"/>
                <p className="mt-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem vitae laboriosam quibusdam, corrupti culpa saepe repellendus ab assumenda, adipisci dolores. Est provident asperiores ex exercitationem necessitatibus minima explicabo odit.</p>
            </div> 

            <ReservationSidebar/>
        </div>

    </main>
  );
}
