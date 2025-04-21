interface CustomButtonProps {
    label: string
    className?: string;
    onClick: () => void;
};

export default function CustomButton({label, className, onClick}: CustomButtonProps) {
    return (
        <div 
            onClick={onClick}
            className={`w-full py-4 bg-[#ff385c] hover:bg-[#d50027] cursor-pointer text-white rounded-xl transition text-center ${className}`}>
            {label}
        </div>
    )
}