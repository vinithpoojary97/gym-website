import Navbar from "@/app/components/navbar";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-5">
        <h1 className="text-5xl font-bold mb-5">
          BUILD YOUR DREAM BODY
        </h1>

        <p className="text-gray-300 mb-6">
          Train hard and stay fit with FITZONE Gym.
        </p>
        <Link href="/programs">
        <button className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600">
          Join Now
        </button>
      </Link>
    </div>
    </div>

  );
}