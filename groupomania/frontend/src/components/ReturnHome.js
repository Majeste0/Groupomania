import { useHistory } from "react-router-dom";

const ReturnHome = () => {
  const onClick = () => {
    console.log("test");
    fetch("http://localhost:3000/api/post/allPosts", {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        console.table(data);
        console.table(data.id);
        console.log(JSON.stringify(data));
        console.log(JSON.stringify(data));
      });
  };
  return <button onClick={onClick}> Click me </button>;
};
export default ReturnHome;
