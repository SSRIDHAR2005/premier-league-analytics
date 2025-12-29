import { Player } from '../services/api';

export default function PlayerModal({
  player,
  onClose,
}: {
  player: Player;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-96">
        <h2 className="text-xl font-bold">{player.name}</h2>
        <p className="text-gray-500">{player.team} • {player.pos}</p>

        <div className="mt-4 space-y-2">
          <p>Goals: {player.gls}</p>
          <p>Assists: {player.ast}</p>
          <p>xG: {player.xg ?? 0}</p>
          <p>xAG: {player.xag ?? 0}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-purple-900 text-white py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
