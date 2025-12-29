const API_BASE_URL = import.meta.env.VITE_API_URL;

export interface Player {
  name: string;
  nation: string;
  pos: string;
  age: number;
  mp: number;
  starts: number;
  min: number;
  gls: number;
  ast: number;
  pk: number;
  crdy: number;
  crdr: number;
  xg: number;
  xag: number;
  team: string;
}

export const fetchPlayers = async (): Promise<Player[]> => {
  const response = await fetch(`${API_BASE_URL}/player`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
