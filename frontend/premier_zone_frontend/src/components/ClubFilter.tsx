const CLUBS = [
  { key: 'Arsenal', logo: '/clubs/arsenal.svg' },
  { key: 'Chelsea', logo: '/clubs/chelsea.svg' },
  { key: 'Liverpool', logo: '/clubs/liverpool.svg' },
  { key: 'Manchester-City', logo: '/clubs/mancity.svg' },
  { key: 'Tottenham-Hotspur', logo: '/clubs/spurs.svg' },
];

export default function ClubFilter({
  onSelect,
}: {
  onSelect: (team: string) => void;
}) {
  return (
    <div className="flex gap-4 flex-wrap mb-6">
      {CLUBS.map((club) => (
        <button
          key={club.key}
          onClick={() => onSelect(club.key)}
          className="p-2 rounded hover:bg-gray-200 transition"
        >
          <img
            src={club.logo}
            alt={club.key}
            className="h-12 w-12 object-contain"
          />
        </button>
      ))}
    </div>
  );
}
