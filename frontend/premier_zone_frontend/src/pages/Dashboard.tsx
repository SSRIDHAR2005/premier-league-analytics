import { useState, useEffect, useMemo } from 'react';
import { TrendingUp, Loader2, AlertCircle } from 'lucide-react';
import { fetchPlayers, Player } from '../services/api';
import PlayerTable from '../components/PlayerTable';
import SearchBar from '../components/SearchBar';
import FilterControls from '../components/FilterControls';
import ClubFilter from '../components/ClubFilter';
import CountryFilter from '../components/CountryFilter';

export default function Dashboard() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedNation, setSelectedNation] = useState('');

  const [sortField, setSortField] = useState<keyof Player>('gls');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // 🔹 LOAD DATA ONCE
  useEffect(() => {
    fetchPlayers()
      .then(setPlayers)
      .catch(() => setError('Backend not running'))
      .finally(() => setLoading(false));
  }, []);

  // 🔹 FINAL FILTER PIPELINE (REAL DASHBOARD LOGIC)
  const filteredPlayers = useMemo(() => {
    let data = [...players];

    // 🔍 SEARCH (always works)
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      data = data.filter(p =>
        p.name?.toLowerCase().includes(q)
      );
    }

    // 🏟 CLUB (exact match, normalized)
    if (selectedTeam) {
      const team = selectedTeam.trim().toLowerCase();
      data = data.filter(
        p =>
          typeof p.team === 'string' &&
          p.team.trim().toLowerCase() === team
      );
    }

    // 🌍 COUNTRY (IMPORTANT FIX)
    if (selectedNation) {
      data = data.filter(
        p =>
          typeof p.nation === 'string' &&
          p.nation.toUpperCase().includes(selectedNation)
      );
    }

    // 📌 POSITION
    if (selectedPosition) {
      data = data.filter(p => p.pos === selectedPosition);
    }

    // 🔢 SORT
    data.sort((a, b) => {
      const av = a[sortField];
      const bv = b[sortField];

      if (typeof av === 'number' && typeof bv === 'number') {
        return sortDirection === 'asc' ? av - bv : bv - av;
      }
      return 0;
    });

    return data;
  }, [
    players,
    searchQuery,
    selectedTeam,
    selectedNation,
    selectedPosition,
    sortField,
    sortDirection,
  ]);

  const handleSort = (field: keyof Player) => {
    setSortDirection(
      field === sortField && sortDirection === 'desc' ? 'asc' : 'desc'
    );
    setSortField(field);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="w-10 h-10 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#52b69a' }}>
      <div className="max-w-7xl mx-auto p-6">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-8 h-8 text-white" />
          <h1 className="text-3xl font-bold text-white">
            Premier League Analytics
          </h1>
        </div>

        {/* CLUB FILTER */}
        <ClubFilter onSelect={setSelectedTeam} />

        {/* COUNTRY FILTER */}
        <CountryFilter onSelect={setSelectedNation} />

        {/* SEARCH + DROPDOWNS */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterControls
            teams={[...new Set(players.map(p => p.team))]}
            positions={[...new Set(players.map(p => p.pos))]}
            selectedTeam={selectedTeam}
            selectedPosition={selectedPosition}
            onTeamChange={setSelectedTeam}
            onPositionChange={setSelectedPosition}
          />
        </div>

        {/* TABLE */}
        <PlayerTable
          players={filteredPlayers}
          sortField={sortField}
          sortDirection={sortDirection}
          onSort={handleSort}
        />

        <p className="text-center text-white mt-4">
          Showing {filteredPlayers.length} of {players.length} players
        </p>
      </div>
    </div>
  );
}
