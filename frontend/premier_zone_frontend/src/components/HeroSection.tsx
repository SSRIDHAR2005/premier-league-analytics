export default function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-[#4fb89a] flex items-center px-16">
      <div className="max-w-3xl">
        <img
          src="/logos/pl_logo.webp"
          alt="Premier League"
          className="w-56 mb-6"
        />

        <h1 className="text-white text-5xl font-light mb-4">
          Welcome to <br />
          <span className="font-semibold">Premier Zone Fantasy!</span>
        </h1>

        <p className="text-white/80 text-lg mb-10">
          Your home for everything Premier League related!
        </p>

        <button
          onClick={onStart}
          className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 text-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
        >
          GET STARTED
        </button>
      </div>
    </section>
  );
}
