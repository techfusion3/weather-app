import Button from "@mui/material/Button";

export default function ButtonOne() {
  let handleClick = () => {
    console.log("button was clicked!");
  };

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="outlined" onClick={handleClick}>
        Click me!
      </Button>
    </>
  );
}
