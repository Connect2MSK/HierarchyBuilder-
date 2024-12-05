const response = {
  folder_list: [
    {
      id: 100,
      name: "01_VL_VKBG",
      parent_id: 0,
      write_permission: "true",
    },
    {
      id: 101,
      name: "03_VKBG",
      parent_id: 100,
      write_permission: "true",
    },
    {
      id: 102,
      name: "02 VL VKBG",
      parent_id: 101,
      write_permission: "true",
    },
    {
      id: 103,
      name: "01 MT",
      parent_id: 0,
      write_permission: "true",
    },
    {
      id: 104,
      name: "WriteFolderForUserHavingReadRole",
      parent_id: 103,
      write_permission: "true",
    },
  ],
  vehicle_list: [
    {
      vehicle_id: 1000,
      name: "vehicleA",
      parent_id: 103,
    },
    {
      vehicle_id: 1001,
      name: "vehicleB",
      parent_id: 102,
    },
  ],
};

//consider parent id is 0 by default
const outputFunction = (folders_List, vehicle_list, parentId = 0) => {
  //adding folder list and vehicle list in one array
  const combinedArr = [
    ...folders_List,
    ...vehicle_list.map((v) => ({
      id: v.vehicle_id,
      name: v.name,
      parent_id: v.parent_id,
    })),
  ];

  const result = combinedArr
    .filter((item) => item.parent_id === parentId)
    .map((item) => ({
      ...item,
      children: outputFunction(folders_List, vehicle_list, item.id), //if outPutFunction length is 0 we can avoid creating this children property
    }));

  return result;
};

const output = outputFunction(response.folder_list, response.vehicle_list);

console.log(JSON.stringify(output, null, 2)); //to view in json formatted text
