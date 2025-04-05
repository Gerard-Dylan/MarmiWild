import MenuItem from './MenuItem';

interface FoodItem {
    id: number;
    itemName: string;
    price: number;
    isFavorite: boolean;
    foodImage: string;
    description: string;
}
interface MenuListProps {
    foodItems: FoodItem[];
}


function MenuList({ foodItems }: MenuListProps) {
    return (
        <ul>
            {foodItems.map((foodItem) => (
                <MenuItem key={foodItem.id} {...foodItem} />
            ))}
        </ul>
    );
}


export default MenuList;