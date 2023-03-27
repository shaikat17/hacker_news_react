import React from "react";
import { useGlobalContext } from "../Context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  // console.log(hits);

  if (isLoading) return <div className="loading"></div>;

  return (
    <section className="stories">
      {hits.map((story) => {
        // console.log(story);
        const { objectID, title, num_comments, url, points, author } = story
        return(
          <article key={objectID} className="story">
          <h4 className="title">{title}</h4>
          <p className="info">
          {points} points by <span>{author} | </span>{num_comments} comments</p>
          <div>
          <a href={url} className="read-link" target="_blank" rel="noopener noreferrer">read more</a>
          <button className="remove-btn" onClick={() => removeStory(objectID)}>Remove</button>
          </div>
          </article>
          );
      })}
    </section>
  );
};

export default Stories;
