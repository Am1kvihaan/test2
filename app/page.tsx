"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToAsk = () => {
    router.push("/ask"); // Navigate to /ask page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 text-center p-4">
      <h1 className="text-5xl font-bold mb-6">💖 Will you be My Valentines Sri?  💖</h1>
      <p className="text-xl mb-6">
        Click the button below to see your special Valentine message!
      </p>
      <button
        onClick={goToAsk}
        className="bg-red-500 text-white px-6 py-3 rounded-xl text-2xl hover:bg-red-600 transition"
      >
        Go 💕
      </button>
    </div>
  );
}
