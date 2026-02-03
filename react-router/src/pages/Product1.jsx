export default function product1() {
  const Pro = [
    { id: 1, name: "Blouse", price: 100 + "$" },
    { id: 2, name: "Teshirt", price: 50 + "$" },
    { id: 3, name: "short", price: 60 + "$" },
    { id: 4, name: "Snickers", price: 20 + "$" },
    { id: 5, name: "Boots", price: 90 + "$" },
    { id: 6, name: "Pants", price: 10 + "$" },
    { id: 7, name: "Pajamas", price: 30 + "$" },
    { id: 8, name: "Socks", price: 90 + "$" },
    { id: 9, name: "Jeans", price: 20 + "$" },
    { id: 10, name: "Suits", price: 40 + "$" },
    { id: 11, name: "Purse", price: 70 + "$" },
  ];
  return (
    <div>
      {Pro.map((p) => (
        <li key={p.id}>
          {p.name} | {p.price}
        </li>
      ))}
    </div>
  );
}
