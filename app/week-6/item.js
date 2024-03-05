const Item = ({ name, quantity, category }) => {
  return (
    <ul className='p-2 m-4 bg-slate-900 max-w-sm'>
      <li>
        <div>
          <strong>{name}</strong><br />
          Buy {quantity} in {category}
        </div>
      </li>
    </ul>
  );
};

export default Item;
