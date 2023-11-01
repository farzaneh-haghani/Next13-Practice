import Image from "next/image";
import Product from "./components/Product";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        {/* Link used instead of anchor to stop re download all resources (check in network tab)*/}
        <Link href="/users">Users</Link>
        <Product />
      </div>
    </main>
  );
}

//server side rendering:
// No browser events
// No access API
// No use state or use effect
