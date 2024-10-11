import NavBar from "../components/NavBar";

export default function ProjectLayout({ children }) {
  return (
    <>
      <NavBar initialBgColor="transparent" color="white" isMainNav={true} />
      <div className="">{children}</div>
    </>
  );
}
