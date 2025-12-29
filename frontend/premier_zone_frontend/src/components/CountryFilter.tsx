interface Country {
  code: string;
  label: string;
  flag: string;
}

const COUNTRIES: Country[] = [
  { code: 'ENG', label: 'England', flag: '/flags/england.png' },
  { code: 'BRA', label: 'Brazil', flag: '/flags/brazil.jfif' },
  { code: 'FRA', label: 'France', flag: '/flags/france.jfif' },
  { code: 'ESP', label: 'Spain', flag: '/flags/spain.png' },
];

interface Props {
  onSelect: (nation: string) => void;
}

export default function CountryFilter({ onSelect }: Props) {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {COUNTRIES.map((country) => (
        <button
          key={country.code}
          type="button"
          onClick={() => onSelect(country.code)}
          className="hover:scale-110 transition"
          title={country.label}
        >
          <img
            src={country.flag}
            alt={country.label}
            className="h-8 w-8 rounded-full object-cover border"
          />
        </button>
      ))}
    </div>
  );
}
