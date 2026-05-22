import Navbar from "@/app/components/navbar";
export default function Membership() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="p-10">
        <h1 className="text-5xl font-bold text-center mb-10">
          Membership Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Basic
            </h2>

            <p className="text-4xl text-red-500 mb-5">
              ₹999
            </p>

            <button className="bg-red-500 px-5 py-2 rounded-lg">
              Choose
            </button>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Standard
            </h2>

            <p className="text-4xl text-red-500 mb-5">
              ₹1999
            </p>

            <button className="bg-red-500 px-5 py-2 rounded-lg">
              Choose
            </button>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Premium
            </h2>

            <p className="text-4xl text-red-500 mb-5">
              ₹2999
            </p>

            <button className="bg-red-500 px-5 py-2 rounded-lg">
              Choose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}