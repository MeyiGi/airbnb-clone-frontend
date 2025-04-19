import { UserIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function UserNav() {
    return (
        <div className="p-2 relative inline-block border border-gray-200 rounded-full">
            <button className="flex items-center">
            <Bars3Icon className="w-6 h-6 cursor-pointer" />
            <UserIcon className="w-6 h-6 text-black cursor-pointer" />
            </button>
        </div>
    )
}