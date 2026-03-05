"use client";

import React from "react";
import { userprops } from "@/types/types";

const User = ({ userName, userType }: userprops) => {
  return (
    <div>
      <h3>{userName}</h3>
      <p>user type: {userType}</p>
    </div>
  );
};

export default User;
