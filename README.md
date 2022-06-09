# generic axios fozilkhon


## Installation

To deploy this project run

```bash
  npm i request-axios-fozilkhon
  import request from 'request-axios-uzb'
```

## Use generic axios

Install my-project with npm

```bash
  useQuery(["getUsers"], () => request({url: 'https://jsonplaceholder.typicode.com/users'}), {
    onSuccess: (res) => {
      console.log(res, 'qale azizbek aka ');
    },
    onError: (err) => console.log(err, "getUsers"),
  });
```


#### Parametrs

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `string` | Bu bekend url yuvorishlik uchun |
| `method`   | `string` | default 'get', 'POST', 'DELETE', 'PUT' |
| `body`     | `string` | Bu bekend data yuvorishlik uchun |
| `headers`  | `string` | Authorization qilishlik uchun |
