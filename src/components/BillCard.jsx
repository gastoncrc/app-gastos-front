const BillCard = ({ bill }) => {
  const { name, price, category, user } = bill;
  return (
    <div className="flex flex-col rounded-md bg-slate-900 p-4 gap-2 w-36 h-46">
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{category}</p>
      <p>{user.name}</p>
    </div>
  );
};

export default BillCard;
