import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  HomeIcon,
  EnvelopeIcon,
  InboxStackIcon,
  EllipsisHorizontalCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";
import { signOut, signIn, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession(); // rename property data => session

  const items = [
    { icon: HomeIcon, title: "Home" },
    { icon: HashtagIcon, title: "Explore" },
    { icon: BellIcon, title: "Notifications" },
    { icon: EnvelopeIcon, title: "Messages" },
    { icon: BookmarkIcon, title: "Bookmarks" },
    { icon: InboxStackIcon, title: "Lists" },
    {
      icon: UserIcon,
      title: session ? "Sign Out" : "Sign In",
      onClick: session ? signOut : signIn,
    },
    { icon: EllipsisHorizontalCircleIcon, title: "More" },
  ];
  return (
    <div className="flex flex-col items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      {items.map((item, i) => (
        <SidebarRow
          Icon={item.icon}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Sidebar;
