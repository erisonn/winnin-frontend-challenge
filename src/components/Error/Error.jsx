import './Error.scss'

const Error = ({errorMessage, handleError, buttonText}) => {

    return ( 
        <div className="error">
            <h1>{errorMessage}</h1>
            <button onClick={() => handleError()}>{buttonText}</button>
        </div>
    );
}
 
export default Error;