import { Home, Users, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClass = ({ isActive }: any) =>
    `flex flex-col items-center gap-1 ${
      isActive ? 'text-white' : 'text-white/70'
    }`;

  return (
    <nav className="bg-[#1b4f72] px-6 py-3 flex justify-between items-center shadow">
      <div className="flex items-center gap-3">
        <img src="/logos/pl_logo.webp" className="h-8" />
        <span className="text-white font-bold text-lg">PremierZone</span>
      </div>

      <div className="flex gap-8">
        <NavLink to="/" className={linkClass}>
          <Home />
          <span className="text-xs">Home</span>
        </NavLink>

        <NavLink to="/players" className={linkClass}>
          <Users />
          <span className="text-xs">Players</span>
        </NavLink>

        <NavLink to="/players" className={linkClass}>
          <Search />
          <span className="text-xs">Search</span>
        </NavLink>
      </div>
    </nav>
  );
}
