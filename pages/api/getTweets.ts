// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Tweet } from "../../typings";
import  {groq} from 'next-sanity'

// http://localhost:3002/api/getTweets
// backend api endpoint

type Data = {
  tweet: Tweet[]; // export some tweets back
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
