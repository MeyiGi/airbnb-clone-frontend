import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SearchFilters from "./SearchBar";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="mx-auto px-6 max-w-[1500p]">
        <div className="flex justify-between items-center">
          {/* Logo Left*/}
          <Link href="/">
            <Image
              src="/airbnb-logo.svg"
              alt="airbnb-image-desktop"
              width={180}
              height={3}
            />
          </Link>

          {/* Search Bar */}
          <div className="space-x-6">
            <SearchFilters/>
          </div>

          {/* Profile Part */}
          <div className="flex items-center space-x-6">
            <AddPropertyButton/>
            <UserNav/>
          </div>
        </div>
      </div>
    </header>
  );
}
