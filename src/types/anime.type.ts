export type Anime = {
  id: number;
  title: {
    romaji: string;
    english?: string;
    native: string;
  };
  coverImage: {
    large: string;
  };
};
