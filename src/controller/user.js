const { responseData, statusCode } = require("../utils");
exports.getUserList = (req, res, next) => {
  const list = [
    {
      id: 1,
      name: "lgf",
      avatar:
        "https://cdn.gudsen.vip/2022/07/12/052b529c490740a781ffa59a60e590ff.jpg",
    },
    {
      id: 2,
      name: "木子李",
      avatar:
        "https://cdn.gudsen.vip/2022/07/12/052b529c490740a781ffa59a60e590ff.jpg",
    },
  ];
  res.status(200).json(responseData(statusCode.success, list));
};
