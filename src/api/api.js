// // // const API_KEY="7c252073-970a-447d-af35-a1acd3c26e65";

// // //details of all the upcoming matches

// // export const getMatches=()=>{
// //     const url=' https://api.cricapi.com/v1/cricScore?apikey=7c252073-970a-447d-af35-a1acd3c26e65 ';

// //     return fetch(url)
// //     .then((response)=> response.json())
// //     .catch((error)=>console.log("ERROR: ", error));

// // }; 
// https://cricapi.com/api/matches?apikey=${API_KEY}


// const API_KEY = "7c252073-970a-447d-af35-a1acd3c26e65";

// export const getMatches = () => {
//   const url = `https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`;
//   console.log("URL", url);
//   return fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .catch((error) => {
//       console.log("ERROR ", error);
//     });
// };

// //get the score of the cuurent match


// export const getMatchDetail = (id) => {
//   const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// };



const API_KEY = "7c252073-970a-447d-af35-a1acd3c26e65";

export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/cricScore?apikey="7c252073-970a-447d-af35-a1acd3c26e65"`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};