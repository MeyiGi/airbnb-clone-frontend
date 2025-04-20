import beachImage from "@/public/beach.jpg";
import cabinsImage from "@/public/cabins.jpg";

import CategoryItem from "./CategoryItem";

export default function Categories() {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <CategoryItem label="Beach" image={beachImage}/>
            <CategoryItem label="Villas" image={cabinsImage}/>
            <CategoryItem label="Cabins" image={beachImage}/>
            <CategoryItem label="Tiny Homes" image={beachImage}/>
        </div>
    )
}