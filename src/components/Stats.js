export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding items to your list</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round(numPacked / numItems);

  return (
    <footer className="stats">
      <em>
        {percentage === 10
          ? "You got everything! Ready to go"
          : `You have ${numItems} items in your list, and you are ${percentage}%
        packed.`}
      </em>
    </footer>
  );
}
