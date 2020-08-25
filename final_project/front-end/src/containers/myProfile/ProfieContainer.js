import React from 'react'
import { useSelector } from "react-redux";
import ProfileViewer from "../../components/myprofile/ProfileViewer";

const ProfileContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  console.log({ user });
  return <ProfileViewer user={user} />;
};

export default ProfileContainer;
