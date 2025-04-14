import { useLazyQuery } from "@apollo/client";
import { SEARCH_ANIME } from "../graphql/queries";

export const useAnimeSearch = () => {
  const [searchAnime, { data, loading, error }] = useLazyQuery(SEARCH_ANIME);
  return { searchAnime, data, loading, error };
};
