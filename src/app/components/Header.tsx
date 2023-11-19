import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-7">
      <Link href="/">
        <a className="text-4xl font-bold">Home Page</a>
      </Link>
    </header>
  );
}
