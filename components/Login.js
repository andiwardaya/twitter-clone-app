import { signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-10 pt-48">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />

      <div>
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="flex flex-col justify-center items-center space-y-10"
          >
            {/* https://devdojo.com/tailwindcss/buttons#_ */}
            <p className="text-[#d9d9d9] w-50 max-w-lg text-center font-bold ">
              Selamat datang teman-temanku di aplikasi simple twitter
              menggunakan Next JS, Firebase dan Tailwind CSS
            </p>
            <button
              className="relative px-6 py-3 font-bold text-[#d9d9d9] group"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#1d9bf0] group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
              <span className="relative">Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
