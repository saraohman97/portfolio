'use client'

import { IconType } from "react-icons"

interface CategoryInputProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
    return ( 
        <div
        onClick={() => onClick(label)}
        className={`text-gray-500 flex flex-col gap-2 items-center cursor-pointer hover:text-gray-800 ${selected && 'text-gray-800'}`}
        >
            <Icon size={30} />
            <div>{label}</div>
        </div>
     );
}
 
export default CategoryInput;