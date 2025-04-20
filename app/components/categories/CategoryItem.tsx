import Image, { StaticImageData } from 'next/image'

interface CategoryItemProps {
    label: string
    image: StaticImageData
}

export default function CategoryItem({ label, image} : CategoryItemProps) {
    return (
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
            <Image
                src={image}
                alt={`Category - ${label}`}
                width={20}
                height={20}
                />
            
            <span className='text-xs'>Beach</span>
        </div>
    )
}