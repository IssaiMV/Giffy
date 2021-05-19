import Loading from "components/Loading";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <br />
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}
