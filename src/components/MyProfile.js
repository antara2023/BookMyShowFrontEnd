import { useEffect, useState } from "react";

export const Myprofile = () => {
  const [myDetail, setMyDetail] = useState([]);
  const fetchUser = () => {
    fetch("http://localhost:5050/api/user/profile", {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => setMyDetail(data));
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="profile">
      <h1>Welcome to My Profile</h1>
      <div>{myDetail.fullName}</div>
      <div>{myDetail.email}</div>
      <div>{myDetail.role}</div>
    </div>
  );
};
