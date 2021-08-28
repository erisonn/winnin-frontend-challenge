import './Error.scss'

const Error = ({errorMessage, handleError}) => {
    return ( 
        <div className="error">
            <h1>{errorMessage}</h1>
            <button onClick={() => handleError()}>Try again</button>
        </div>
    );
}
 
export default Error;