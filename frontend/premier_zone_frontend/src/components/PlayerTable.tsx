import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Player } from '../services/api';

interface PlayerTableProps {
  players: Player[];
  sortField: keyof Player | null;
  sortDirection: 'asc' | 'desc';
  onSort: (field: keyof Player) => void;
}

/* 🔒 SAFE number formatter (handles null / undefined) */
const formatNumber = (value: number | null | undefined, decimals = 2) =>
  value !== null && value !== undefined ? value.toFixed(decimals) : "0.00";

export default function PlayerTable({
  players,
  sortField,
  sortDirection,
  onSort,
}: PlayerTableProps) {
  const SortIcon = ({ field }: { field: keyof Player }) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4 opacity-40" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-4 h-4" />
    ) : (
      <ArrowDown className="w-4 h-4" />
    );
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nation</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">MP</th>

            <th onClick={() => onSort('gls')} className="px-6 py-3 cursor-pointer hover:bg-gray-100">
              <div className="flex items-center gap-1">
                Goals <SortIcon field="gls" />
              </div>
            </th>

            <th onClick={() => onSort('ast')} className="px-6 py-3 cursor-pointer hover:bg-gray-100">
              <div className="flex items-center gap-1">
                Assists <SortIcon field="ast" />
              </div>
            </th>

            <th onClick={() => onSort('xg')} className="px-6 py-3 cursor-pointer hover:bg-gray-100">
              <div className="flex items-center gap-1">
                xG <SortIcon field="xg" />
              </div>
            </th>

            <th onClick={() => onSort('xag')} className="px-6 py-3 cursor-pointer hover:bg-gray-100">
              <div className="flex items-center gap-1">
                xAG <SortIcon field="xag" />
              </div>
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Minutes</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Yellow</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Red</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {players.length === 0 ? (
            <tr>
              <td colSpan={13} className="px-6 py-12 text-center text-gray-500">
                No players found
              </td>
            </tr>
          ) : (
            players.map((player, index) => (
              <tr
                key={`${player.name}-${player.team}-${index}`}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {player.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {player.team}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {player.pos}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{player.age}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{player.nation}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{player.mp}</td>

                <td className="px-6 py-4 text-sm font-semibold text-green-600">
                  {player.gls ?? 0}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                  {player.ast ?? 0}
                </td>

                <td className="px-6 py-4 text-sm text-gray-500">
                  {formatNumber(player.xg)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {formatNumber(player.xag)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {player.min != null ? player.min.toLocaleString() : "0"}
                </td>
                <td className="px-6 py-4 text-sm text-yellow-600">
                  {player.crdy ?? 0}
                </td>
                <td className="px-6 py-4 text-sm text-red-600">
                  {player.crdr ?? 0}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
