import { Tweet } from "./../../typings.d";
import { groq } from "next-sanity"; // groq call to fetch the appropriate id
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Comment } from "../../typings";
import { sanityClient } from "../../sanity";

// http://localhost:3001/api/getComment
// backend api endpoint

const commentQuery = groq`
    *[_type == "comment" && references(*[_type== 'tweet' && _id == $tweeId]._id)]
    {
        _id,
        ...
    } | order(_createdAt desc)
`;

type Data = Comment[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { tweetId } = req.query;
  const comments: Comment[] = await sanityClient.fetch(commentQuery, {
    tweetId,
  });
  //   console.log(`Comments >>> ${comments}`)
  res.status(200).json(comments);
}
