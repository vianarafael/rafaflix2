// import React, { useState } from "react";
// import Slider from "react-slick";
// import BannerMain from "../../src/components/commons/BannerMain";
// import { Button } from "../../src/components/commons/Button/button.component";
// import { SliderItem } from "../../src/components/commons/Carousel/components/Slider";

// export default function Film(details) {
//   console.log(details.title);

//   return (
//     <div>
//       <BannerMain
//         videoTitle={details.title}
//         url={details.videos.results[0]["key"]}
//         videoDescription={details.overview}
//       />
//       <div
//         style={{
//           textAlign: "center",
//           fontSize: "3rem",
//           cursor: "pointer",
//         }}
//       >
//         {/* <Button>Add Movie to Watch List</Button> */}
//         {/* <h6 className="msg">{message || <span>&nbsp;&nbsp;</span>}</h6> */}
//       </div>
//       <h1 style={{ textAlign: "center" }}>Cast</h1>
//       <Slider>
//         {details.credits.cast.map((actor) => {
//           return (
//             <SliderItem key={actor.cast_id}>
//               {/* <CastCard
//                         id={actor.id}
//                         name={actor.name}
//                         character={actor.character}
//                         img={actor.profile_path}
//                       /> */}
//             </SliderItem>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// }

// export async function getStaticProps({ params }) {
//   console.log(params);
//   const details = await fetch(
//     `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.filmAppKey}&append_to_response=videos,credits`
//   ).then((res) => res.json());

//   return {
//     props: details,
//   };
// }

// export async function getStaticPaths() {
//   const paths = [{ params: { id: "588228" } }];
//   return {
//     paths,
//     fallback: false,
//   };
// }
