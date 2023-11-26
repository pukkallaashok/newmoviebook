export const bgImg =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const logoImg =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_KEY = "d53b33bdc7c7b97594c7cd416c7f25b1";

export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTNiMzNiZGM3YzdiOTc1OTRjN2NkNDE2YzdmMjViMSIsInN1YiI6IjY1MzliZmQwMjRmMmNlMDExYzY0OGE4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7IClnNSu2-2ftqn7tZ20Y0yYvk7NlWajvMuW3U7MwQ",
  },
};

export const cardsImgUrl = "https://image.tmdb.org/t/p/w500";

export const Supported_Language = [
  { idetifier: "en", langName: "English" },
  { idetifier: "hindi", langName: "Hindi" },
  { idetifier: "telugu", langName: "Telugu" },
  { idetifier: "japanese", langName: "Japanese" },
];

export const openAI_Key = process.env.React_APP_OPENAI_KEY; //process.env["OPENAI_API_KEY"]
