import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ListOfGifs from "../../components/ListOfGifs";
import getGifs from "../../services/getGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      console.log("keyword :>> ", keyword);
      getGifs(keyword).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  return <>{loading ? <Loading /> : <ListOfGifs gifs={gifs} />}</>;
}
