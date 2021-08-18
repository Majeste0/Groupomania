const ReturnHome = () => {
  const onClick = () => {
    fetch("http://localhost:3000/api/post/allPosts", {})
      .then((response) => response.json())
      .then((data) => {});
  };
  return <button onClick={onClick}> Click me </button>;
};
export default ReturnHome;
