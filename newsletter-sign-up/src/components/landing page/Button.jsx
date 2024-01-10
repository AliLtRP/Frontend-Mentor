import { useNavigate } from "react-router-dom";




function Button({ navi, message }) {

    const navigate = useNavigate();

    const subscribe = () => {
        navigate(navi);
    }

    return (
        <button className="button" onClick={subscribe}> {message} </button>
    );
}

export default Button;