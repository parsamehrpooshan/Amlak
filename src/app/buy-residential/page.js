import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import React from "react";

async function BuyResidentials({ searchParams }) {
  await connectDB();
  const profiles = await Profile.find({ published: true }).select("-userId");

  let finalData = JSON.parse(JSON.stringify(profiles));
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidentials;
