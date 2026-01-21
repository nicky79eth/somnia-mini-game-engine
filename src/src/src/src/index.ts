import { runRound } from "./engine";

let state = {
  round: 0,
  players: [
    { address: "0xPlayer1", score: 0 },
    { address: "0xPlayer2", score: 0 }
  ]
};

async function main() {
  state = await runRound(state);
  console.log(state);
}

main();
