Output: [
  {
    id: 100,
    name: "01_VL_VKBG",
    parent_id: 0,
    write_permission: "true",
    children: [
      {
        id: 101,
        name: "03_VKBG",
        parent_id: 100,
        write_permission: "true",
        children: [
          {
            id: 102,
            name: "02 VL VKBG",
            parent_id: 101,
            write_permission: "true",
            children: [
              {
                id: 1001,
                name: "vehicleB",
                parent_id: 102,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 103,
    name: "01 MT",
    parent_id: 0,
    write_permission: "true",
    children: [
      {
        id: 104,
        name: "WriteFolderForUserHavingReadRole",
        parent_id: 103,
        write_permission: "true",
      },
      {
        id: 1000,
        name: "vehicleA",
        parent_id: 103,
      },
    ],
  },
];
