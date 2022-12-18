export interface Tweet extends TweetBody {
  // get from sanity with other fields such as id (based on tweet.js fields)
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "tweet";
  blockTweet: boolean;
}

export type TweetBody = {
  text: string;
  username: string;
  profileImg: string;
  image?: string; // optional b/c not 100% required
};

export interface Comment extends CommentBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "comment";
  _updatedAt: string;

  // create reference to tweet
  tweet: {
    _ref: string;
    _type: "reference";
  };
}

export type CommentBody = {
  comment: string;
  tweetId: string;
  username: string;
  profileImg: string;
};
