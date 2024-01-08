

export const FruitCard = ({name, category, price}) => {
  return (
    <div>
        <h2 className="text-2xl font-semibold">Name: {name}</h2>
        <p className="text-gray-500 text-sm">Category: {category}</p>
        <span className="text-gray-700 font-bold">Price: {price}</span>
    </div>
  )
}
