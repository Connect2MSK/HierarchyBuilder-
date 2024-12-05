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

const outPutFunction = () => {
  const { folder_list } = resoponse;
  const newObj = [];
  const parentList = folder_list.filter((item) => item.parent_id === 0);

  const pObj = {};
  for (let x of parentList) {
    newObj.push(x);
    const parentList1 = folder_list.filter((item) => item.parent_id === x.id);
  }
};

outPutFunction();
