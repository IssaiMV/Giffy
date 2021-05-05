import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);

      const keywordToUse = keyword || localStorage.getItem("lastKeyword");

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        if (keyword) localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword]
  );
  return { loading, gifs };
}
