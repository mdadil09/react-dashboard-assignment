export var arr = [];

export const addUser = (name, email, mobileNo, insta, youtube) => {
  var cus = {
    name: name,
    email: email,
    mobileNo: mobileNo,
    insta: insta,
    youtube: youtube,
  };
  arr.push(cus);
};
