import PrimaryButton from "../components/PrimaryButton";
import Navbar from "../components/Navbar";

const Layouts = ({ children, title, path }) => {
    return (
        <div className="flex">
            <Navbar />
            <div className="layouts">
                <div className="flex justify-between items-center">
                    <h1 className="title">{title}</h1>
                    {path !== false && <PrimaryButton thisPath={path} />}
                </div>
                {children}
            </div>
        </div>
    );
};
export default Layouts;