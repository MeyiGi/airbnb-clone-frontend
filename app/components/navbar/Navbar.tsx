import Image from "next/image";
import Link from "next/link";
import SearchFilters from "./SearchBar";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";
import LogoImage from "@/public/airbnb-logo.jpg"

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 border-b border-gray-200 bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src={LogoImage}
                            alt="DjangoBnb logo"
                            width={180}
                            height={38}
                        />
                    </Link>

                    <div className="flex space-x-6">
                        <SearchFilters />
                    </div>

                    <div className="flex items-center space-x-6">
                        <AddPropertyButton />

                        <UserNav />
                    </div>
                </div>
            </div>
        </nav>
  );
}
