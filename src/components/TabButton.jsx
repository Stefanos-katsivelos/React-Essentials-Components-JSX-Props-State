export default function TabButton({children}) {
  function handleClick() {
    console.log("Hello Word")
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
