import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyProfilePage from "@/template/MyProfilePage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";

async function Myprofiles() {
  await connectDB();
  const session = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    {
      $match: { email: session.user.email },
    },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  console.log(user.profiles);
  return <MyProfilePage profiles={user.profiles} />;
}

export default Myprofiles;
