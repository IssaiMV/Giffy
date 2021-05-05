import { Link } from "wouter";
export default function Category(
  { name, options } = { name: "Undefine", options: [] }
) {
  return (
    <>
      <h3>{name}</h3>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <Link to={`/search/${option}`}>Gifs de {option}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
