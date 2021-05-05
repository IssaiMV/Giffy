import { useEffect, useState } from "react";
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "components/Category/";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0];
      console.log(el.isIntersecting);
      if (el.isIntersecting) {
        setShow(true);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });
    observer.observe(document.getElementById("LazyTrending"));
  }, []);

  return <div id="LazyTrending">{show ? <TrendingSearches /> : null}</div>;
}
