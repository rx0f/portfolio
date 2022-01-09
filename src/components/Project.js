const Project = (props) => {
    return (
        <div className="my-4 flex items-center w-[40%]">
            <div className="w-[10%] rounded-full overflow-hidden drop-shadow-md mx-4">
                <img src={props.logo} alt="" />
            </div>
            <p>{props.text}</p>
        </div>
    );
}

export default Project