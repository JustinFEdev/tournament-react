import React, { useState, useEffect } from "react";

const Demo = () => {
  const [data, setData] = useState();
  let arr = [13, 12, 11, 10, 5, 3, 2, 1];

  arr.sort();

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  console.log(...arr);

  let arrayObj = [
    { key1: "value1", key2: "value2" },
    { key1: "value1", key2: "value2" },
  ];

  arrayObj = arrayObj.map((item) => {
    return {
      stroke: item.key1,
      key2: item.key2,
    };
  });
  console.log(arrayObj);

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"
    )
      .then((res) => {
        res.json();
      })
      .then((json) => setData(json));

    console.log("data");
    console.log(data);
  }, []);

  return (
    <>
      <div>demo</div>
    </>
  );
};

export default Demo;
