import { Link } from "react-router-dom";

const PrimaryButton = ({ thisPath, NamaButton }) => {
    return (
        <Link to={thisPath} className="button is-success">
            {NamaButton}
        </Link>

    )
}
export default PrimaryButton