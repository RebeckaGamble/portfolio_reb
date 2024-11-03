import ProjectNav from "../components/navbar/ProjectNav";

export default function ProjectLayout({ children }) {
  return (
    <>
      <ProjectNav initialBgColor="transparent" isMainNav={false} />
      <div className="">{children}</div>
    </>
  );
}
