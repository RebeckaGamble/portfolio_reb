import NavBar from "../components/NavBar";

export default function ProjectLayout({ children }){
    return (
        <>
        <NavBar setNavBg="transparent" color="white" isMainNav={true} />
        {children}
        </>
    )
}