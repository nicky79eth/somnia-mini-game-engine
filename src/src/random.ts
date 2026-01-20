import { provider } from "./provider";

export async function getChainRandomness(): Promise<number> {
  const block = await provider.getBlock("latest");
  return Number(block.hash.slice(-6)) % 100;
}
