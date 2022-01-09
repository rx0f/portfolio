const Project = (props) => {
    return (
        <div className="my-4 flex items-center w-[80%] md:w-[40%]">
            <div className="w-[20%] md:w-[10%] rounded-full overflow-hidden drop-shadow-md mx-4">
                <img src={props.logo} alt="" />
            </div>
            <p className="w-[80%] md:w-[90%]">{props.text}</p>
        </div>
    );
}

export default Project