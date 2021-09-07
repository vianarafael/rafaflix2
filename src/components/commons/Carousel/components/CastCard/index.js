import React from "react";
import { VideoCardContainer } from "../VideoCard/styles";

const CastCard = ({ id, name, character, img, history, setSelectedActor }) => {
  const image = `https://image.tmdb.org/t/p/w200/${img}`;
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>{name}</h3>
        <h4>{character}</h4>
      </div>
      <VideoCardContainer
        onClick={() => {
          //change the page, save the id to use in the page s
          // same as movies
          setSelectedActor(id);
          history.push("/actor");
        }}
        url={image}
      />
    </>
  );
};

export default CastCard;
