// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Tweet } from "../../typings";
import { groq } from "next-sanity";

// http://localhost:3002/api/getTweets
// backend api endpoint

const feedQuery = groq`
    *[_type == "tweet" && !blockTweet] {
        _id,
        ...
    } | order(_createdAt desc)
`;

type Data = {
  tweet: Tweet[]; // export some tweets back
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tweets: Tweet[] = await sanityClient.fetch(feedQuery);
  //   console.log(tweets);
  res.status(200).json({ tweets });
}
