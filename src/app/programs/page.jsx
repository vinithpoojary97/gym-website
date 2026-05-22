import Navbar from "@/app/components/navbar";

export default function Programs() {
  return (
    <>
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="p-10">
        <h1 className="text-5xl font-bold text-center mb-12">
          Our Programs
        </h1>

        <div className="bg-black min-h-screen text-white py-16">


          <div className="flex justify-center gap-6 flex-wrap">

            
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg w-[330px]">

              <img
                src="/weight.jpeg"
                alt="Weight Training"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-3xl font-bold mb-4 text-red-500">
                  Weight Training
                </h2>

                <p className="text-gray-300 mb-4">
                  Build muscles, improve strength, and increase body power with professional gym workouts.
                </p>

                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>✓ Muscle Building</li>
                  <li>✓ Strength Improvement</li>
                  <li>✓ Full Body Workout</li>
                  <li>✓ Professional Equipment</li>
                </ul>

              </div>
            </div>

            
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg w-[330px]">

              <img
                src="/cardio.jpeg"
                alt="Cardio"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-3xl font-bold mb-4 text-red-500">
                  Cardio
                </h2>

                <p className="text-gray-300 mb-4">
                  Improve stamina, heart health, and fitness through cardio exercises.
                </p>

                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>✓ Fat Burning</li>
                  <li>✓ Increase Stamina</li>
                  <li>✓ Heart Health</li>
                  <li>✓ Treadmill Training</li>
                </ul>

              </div>
            </div>

           
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg w-[330px]">

              <img
                src="/yoga.jpeg"
                alt="Yoga"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h2 className="text-3xl font-bold mb-4 text-red-500">
                  Yoga
                </h2>

                <p className="text-gray-300 mb-4">
                  Relax your mind and body with yoga sessions designed for flexibility and balance.
                </p>

                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>✓ Mental Peace</li>
                  <li>✓ Flexibility</li>
                  <li>✓ Better Balance</li>
                  <li>✓ Stress Relief</li>
                </ul>

              </div>
            </div>

          </div>
        </div>
        </div>
        </div>
    </>
  );
}