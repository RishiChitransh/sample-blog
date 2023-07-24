import Link from "next/link";

const path = [
  {
    uid: 1,
    name: "Copy Right By Rishi",
    id: 1,
    path: "/"
  }
];
export default function Footer() {
  return (
    <footer style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "20px"}}>
      <nav>
        <ul>
          {path.map((value) => {
            return (
              <li key={value.uid}>
                <Link href={value.path}>
                  <h2>{value.name}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
