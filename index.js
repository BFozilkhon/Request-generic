const axios = require('axios')


module.exports = async function request({
    url = "",
    method = "get",
    body = null,
    headers = {},
  }){
    return await axios({
      method,
      url: url,
      data: {
        ...body,
      },
      headers: {
        ...headers,
      },
    })
      .then((res) => res)
      .catch((err) => err);
};

