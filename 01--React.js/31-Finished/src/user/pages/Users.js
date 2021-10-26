import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Harley",
      image:
        "https://cdn.vox-cdn.com/thumbor/XRt2NhLQaAsdAXy29peM2nj45LY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19702584/rev_1_BOP_02370r_High_Res_JPEG.jpeg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
