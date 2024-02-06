const Item = ({ name, quantity, category }) => {
    return (
        <ol>
            <li className="flex justify-between items-centre bg-gray-40 p-2 shadow mb-2"></li>
            <li>
                Name: {name}
            </li>
            <li>
                Purchase {quantity} in {category} category
            </li>
        </ol>
    );
}

export default Item;