fetch('https://reqres.in/api/users')
  .then((res) => res.json())
  .then((data) => {

    for (let i = 0; i < 3; i++) {
      console.log(data.data[i].first_name)
    }
  });
