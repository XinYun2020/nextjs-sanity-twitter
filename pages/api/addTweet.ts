// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TweetBody } from "../../typings";

// http://localhost:3002/api/hello
// backend api endpoint

type Data = {
  message: string;
};

// post request
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: TweetBody = JSON.parse(req.body);

  const mutations = {
    mutations: [
      {
        create: {
          _type: "tweet",
          text: data.text,
          username: data.username,
          blockTweet: false,
          profileImg: data.profileImg,
          image: data.image,
        },
      },
    ],
  };

  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

  const result = await fetch(apiEndpoint, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    // authenticate request
    body: JSON.stringify(mutations),
    method: "POST",
  });

  const json = await result.json();

  res.status(200).json({ message: "Added!" });
}
