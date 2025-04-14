import { useState } from "react";
import AnimeList from "../../features/anime/AnimeList";
import HeroSection from "../../features/search/components/HeroSection";
import { useAnimeSearch } from "../../features/search/hooks/useAnimeSearch";
export default function SearchPage() {
  const [search, setSearch] = useState("");
  const { searchAnime, data, loading, error } = useAnimeSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    searchAnime({ variables: { search: e.target.value, perPage: 20 } });
  };

  const media = data?.Page?.media ?? [];

  return (
    <>
      <HeroSection onSearch={handleSearch} search={search} />
      <AnimeList data={media} loading={loading} error={error} />
    </>
  );
}
