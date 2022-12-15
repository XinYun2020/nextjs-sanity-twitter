import { Tweet } from "../typings";

// able to use at frontend
export const fetchTweets = async () => {
  // make a rest api call to the backend
  // only allow use absolute url, make connection to the endpoint
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`);

  // get data from the res, pass the json response so we get back
  const data = await res.json();
  // cast tweet
  const tweets: Tweet[] = data.tweets;

  return tweets;
};
