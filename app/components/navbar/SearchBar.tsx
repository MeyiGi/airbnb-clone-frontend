import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchFilters() {
    return (
        <div className="h-[64px] lg:h-[64px] flex flex-row items-center justify-between border border-gray-100 rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="h-[64px] lg:h-h-[64px] transition cursor-pointer px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
                        <p className="text-xs font-semibold">Where?</p>
                        <p className="text-sm">Wanted location</p>
                    </div>

                    <div className="h-[64px] lg:h-h-[64px] transition cursor-pointer px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check int</p>
                        <p className="text-sm">Add Dates</p>
                    </div>

                    <div className="h-[64px] lg:h-h-[64px] transition cursor-pointer px-8 flex flex-col rounded-full justify-center hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check out</p>
                        <p className="text-sm">Add Dates</p>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="p-2 lg:p-4 bg-[#ff385c] transition rounded-full text-white hover:bg-[#d50027]">
                <MagnifyingGlassIcon className="w-6 h-6 text-white cursor-pointer" />
                </div>
            </div>
        </div>
    )
}