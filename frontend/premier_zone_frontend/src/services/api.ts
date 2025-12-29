const API_BASE_URL = 'http://localhost:8080/api/v1';

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
  try {
    const response = await fetch(`${API_BASE_URL}/player`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};
