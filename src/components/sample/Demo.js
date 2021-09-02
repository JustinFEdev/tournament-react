import React from "react";

const Demo = () => {
  // const rankData = [
  //   {
  //     num: 1,
  //     player: "jack",
  //     score: 53,
  //     prize: 5,
  //   },
  //   {
  //     num: 2,
  //     player: "max",
  //     score: 41,
  //     prize: 24,
  //   },
  //   {
  //     num: 3,
  //     player: "james",
  //     score: 1112,
  //     prize: 5,
  //   },
  //   {
  //     num: 4,
  //     player: "lecks",
  //     score: 645,
  //     prize: 98,
  //   },
  //   {
  //     num: 5,
  //     player: "lucas",
  //     score: 867,
  //     prize: 111,
  //   },
  //   {
  //     num: 6,
  //     player: "santiago",
  //     score: 978,
  //     prize: 93,
  //   },
  // ];
  // function shuffle(array) {
  //   var currentIndex = array.length,
  //     randomIndex;

  //   // While there remain elements to shuffle...
  //   while (currentIndex != 0) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(
  //       Math.random() * currentIndex
  //     );
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }
  //   return array;
  // }
  // const dek = shuffle(status);
  // const status = [
  //   "newarivel",
  //   "shooting",
  //   "sports",
  //   "arcade",
  //   "rpg",
  //   "adventure",
  //   "puzzle",
  //   "rhythm",
  // ];
  // const [data, setData] = useState();
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

  // useEffect(() => {
  //   fetch(
  //     "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"
  //   )
  //     .then((res) => {
  //       res.json();
  //     })
  //     .then((json) => setData(json));

  //   console.log("data");
  //   console.log(data);
  // }, []);

  return (
    <>
      <div>demo</div>
    </>
  );
};

export default Demo;
