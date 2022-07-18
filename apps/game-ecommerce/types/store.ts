import type { GamePreview } from "./game";

export type StoreSectionContent = {
  title: string;
  href?: string;
  content: GamePreview[];
}