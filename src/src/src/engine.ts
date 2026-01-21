import { GameState } from "./state";
import { getChainRandomness } from "./random";

export async function runRound(state: GameState): Promise<GameState> {
  const rand = await getChainRandomness();

  const updatedPlayers = state.players.map(p => ({
    ...p,
    score: p.score + (rand % 5)
  }));

  return {
    round: state.round + 1,
    players: updatedPlayers
  };
}
