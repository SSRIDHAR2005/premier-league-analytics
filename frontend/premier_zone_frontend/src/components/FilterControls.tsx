import { Filter } from 'lucide-react';

interface FilterControlsProps {
  teams: string[];
  positions: string[];
  selectedTeam: string;
  selectedPosition: string;
  onTeamChange: (team: string) => void;
  onPositionChange: (position: string) => void;
}

export default function FilterControls({
  teams,
  positions,
  selectedTeam,
  selectedPosition,
  onTeamChange,
  onPositionChange,
}: FilterControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filters:</span>
      </div>

      <div className="flex-1 min-w-[200px]">
        <select
          value={selectedTeam}
          onChange={(e) => onTeamChange(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          <option value="">All Teams</option>
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 min-w-[200px]">
        <select
          value={selectedPosition}
          onChange={(e) => onPositionChange(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          <option value="">All Positions</option>
          {positions.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
