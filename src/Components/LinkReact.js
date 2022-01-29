const LinkReact = (props) => {
    return (
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
                {props.children}
        </a>
    )
}

export default LinkReact;