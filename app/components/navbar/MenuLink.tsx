'use client'

interface MenuLinkProps {
    label: string
    onClick: () => void;
}

export default function MenuLink({label, onClick}: MenuLinkProps) {
    return (
        <div
            onClick={onClick} 
            className="px-5 py-4 hover:bg-gray-100 transition">{label}</div>
    )
}