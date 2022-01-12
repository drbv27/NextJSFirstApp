import Link from "next/link";
import Image from "next/image";
import Coffee from "../public/coffee.jpg";

//<Image src="/coffee.jpg" width={600} height="400" />
export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">Ir a chanchitos</Link>
      <p>Chanchito Feliz</p>
      <Image src={Coffee} width={600} height="400" />
    </div>
  );
}
