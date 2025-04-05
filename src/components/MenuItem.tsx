import { useState } from 'react';

interface MenuItemProps {
    id: number;
    itemName: string;
    price: number;
    isFavorite: boolean;
    foodImage: string;
    description: string;
}



function MenuItem({ itemName, price, isFavorite: initialIsFavorite, foodImage, description }: MenuItemProps) {
    const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
    const handleClickFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <section className="itemContainer">
            <figure className="imgContainer">
                <img src={foodImage} alt={itemName} />
                <figcaption>
                    <h2>{itemName}</h2>
                    <p>{description}</p>
                </figcaption>
            </figure>
            <aside>{price} EUR</aside>
            <button type="button" onClick={handleClickFavorite}>
                {isFavorite ? '❤️' : '🖤'}
            </button>
        </section>
    );
}

export default MenuItem;
