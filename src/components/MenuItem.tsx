function MenuItem(props) {
    //create a state isFavorite that has the inital value of isFavorite that comes from the props

    return (
        <section className="itemContainer">
            <figure className="imgContainer">
                {/* the image will receive the url src from the props */}
                <img src="" alt="" />
                <figcaption>
                    {/* the h2 will receive the item name from the props */}
                    <h2>{}</h2>
                    {/* the p will receive the item description from the props */}
                    <p>{}</p>
                </figcaption>
            </figure>
            {/* the span will receive the item price from the props */}
            <aside>{} EUR</aside>

            {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
            <button type="button">{}</button>
        </section>
    );
}

export default MenuItem;