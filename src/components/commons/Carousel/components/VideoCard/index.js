import React from "react";
import { VideoCardContainer } from "./styles";

import { useRouter } from "next/router";

function VideoCard({
  videoTitle,
  categoryColor,
  poster,
  id,
  setSelectedMovie,
  history,
  genres,
}) {
  const router = useRouter();
  let genresString = "";

  if (genres) {
    for (let i = 0; i < 2; i++) {
      genresString += genres[i];
      if (genres.length === 1) break;
      if (i < 1) {
        genresString += " | ";
      }
    }
  }

  const image = `https://image.tmdb.org/t/p/w200/${poster}`;
  return (
    <>
      {/* <p style={{ textAlign: "center" }}>{genresString}</p> */}
      <VideoCardContainer
        url={image}
        target="_blank"
        style={{ borderColor: categoryColor || "red" }}
        title={videoTitle}
        // genres={genres}
        href={`/film/${id}`}
        target="_self"
      />
    </>
  );
}

export default VideoCard;
