import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold text-red-500">
        FITZONE
      </h1>

      <div className="space-x-5">
        <Link href="/">Home</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/membership">Membership</Link>
      </div>
    </nav>
  );
}