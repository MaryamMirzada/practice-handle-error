import react from "../assets/react.svg";
export default function Home1() {
  return (
    <div>
      <h1 style={{ color: "blue", fontSize: 30, textAlign: "center" }}>
        React App
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit velit
        sunt quo consectetur, dolores ratione, aperiam placeat tenetur
        laboriosam est maxime exercitationem omnis. Sed quis reprehenderit
        laborum culpa possimus. Provident.
      </p>
      <img src={react} />
    </div>
  );
}
