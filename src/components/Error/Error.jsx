import './Error.scss'

const Error = ({errorMessage, handleError}) => {
    return ( 
        <div className="error">
            <p>{errorMessage}</p>
            <button onClick={() => handleError()}>Try again</button>
        </div>
    );
}
 
export default Error;