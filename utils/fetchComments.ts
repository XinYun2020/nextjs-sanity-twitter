import { Comment } from "../typings";

// able to use at frontend
export const fetchComments = async (tweetId: string) => {
  // make a rest api call to the backend
  // only allow use absolute url, make connection to the endpoint
  // pass in url query parameters (only safe for things we dont care about)
  const res = await fetch(`/api/getComments?tweetId=${tweetId}`);

  // get data from the res, pass the json response so we get back
  const comments: Comment[] = await res.json();

  return comments;
};
