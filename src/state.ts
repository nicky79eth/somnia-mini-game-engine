export interface Player {
  address: string;
  score: number;
}

export interface GameState {
  round: number;
  players: Player[];
}
