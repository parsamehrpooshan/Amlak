import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import DetailsPage from "@/template/DetailsPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function ProfileDetails({ params: { profileId } }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  const profile = await Profile.findOne({ _id: profileId });
  const user = await User.findOne({ email: session.user.email });

  if (!profile) return <h3>این آگهی حذف شده یا وجود ندارد</h3>;
  return <DetailsPage data={profile} role={user.role} />;
}

export default ProfileDetails;

export const generateMetadata = async ({ params: { profileId } }) => {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) {
    return {
      title: "آگهی یافت نشد",
      description: "این آگهی حذف شده یا وجود ندارد",
    };
  }

  return {
    title: profile.title,
    description: profile.description,
    authors: { name: profile.realState },
  };
};
