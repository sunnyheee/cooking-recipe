import "./SearchRecipe.style.css";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useSearchRecipesQuery } from "../../hooks/useSearchRecipe";
import { useState, useEffect, useRef } from "react";
import RecipeList from "./components/RecipeList";
import RecipeSort from "./components/RecipeSort";
import { BeatLoader, MoonLoader } from "react-spinners";

const SearchRecipe = () => {
  const [query] = useSearchParams();
  const keyword = query.get("q");
  const [sortBy, setSortBy] = useState("relevance");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading = true,
    isError,
    error,
  } = useSearchRecipesQuery({
    keyword,
    sortBy,
  });

  const loadMoreRef = useRef();

  useEffect(() => {
    const currentElement = loadMoreRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <main className="main inner">
      <section className="sec search-recipe">
        <h1>
          Search Results for:
          <span>{keyword}</span>
        </h1>
        <article className="sort-box">
          <RecipeSort setSortBy={setSortBy} />
        </article>
        {isLoading ? (
          <div className="loading-spinner">
            <MoonLoader color="#e2725b" size={40} />
          </div>
        ) : (
          <>
            <ul className="search-card-ul">
              {data?.map((recipe, index) => (
                <RecipeList key={index} recipe={recipe} />
              ))}
            </ul>
            <div ref={loadMoreRef} className="infinite">
              {isFetchingNextPage === true ? (
                <BeatLoader color="#e2725b" />
              ) : (
                !hasNextPage && "No more data available"
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default SearchRecipe;
