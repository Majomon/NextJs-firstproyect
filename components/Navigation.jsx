import Link from "next/link"; // Con esto evito que cada ves que navegue tenga que recargar la página

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
    </ul>
  );
}

export default Navigation;
