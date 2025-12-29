import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#55b89a] min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to <br /> Premier Zone Fantasy!
          </h1>
          <p className="text-white/90 mb-8">
            Your home for everything Premier League related.
          </p>

          <button
            onClick={() => navigate('/players')}
            className="border-2 border-yellow-400 text-yellow-300 px-8 py-3 font-semibold tracking-widest hover:bg-yellow-400 hover:text-black transition"
          >
            GET STARTED
          </button>
        </div>

        <img
          src="/logos/pl_logo.webp"
          className="w-72 mx-auto"
          alt="Premier League"
        />
      </div>
    </div>
  );
}
