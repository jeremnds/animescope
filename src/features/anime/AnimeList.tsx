import { ApolloError } from "@apollo/client";
import { Anime } from "../../types/anime.type";
import AnimeCard from "./AnimeCard";
type AnimeListProps = {
  data: Anime[];
  loading: boolean;
  error: ApolloError | undefined;
};
export default function AnimeList({ data, loading, error }: AnimeListProps) {
  return (
    <div>
      {!error && !loading && (
        <>
          {data?.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </>
      )}
      {error && <div>Error: {error.message}</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
