export type Anime = {
  id: number;
  title: {
    romaji: string;
    english?: string;
  };
  coverImage: {
    large: string;
  };
};
