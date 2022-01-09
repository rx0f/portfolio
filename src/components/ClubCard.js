const ClubCard = (props) => {
    return (
        <div className="lg:my-0 my-4 w-[60%] lg:w-[30%] bg-gray-100 rounded-2xl xl:h-68">
            <div className="flex items-center p-4">
                <div className="w-[15%] rounded-full overflow-hidden">
                    <img src={props.logo} alt="" />
                </div>
                <h3 className="md:text-xl lg:text-xl mx-2 font-bold">{props.name}</h3>
            </div>
            <div className="w-[90%] h-[0.1rem] bg-gray-300 mx-auto"/>
            <div>
                <p className="mx-2 my-4 md:mx-4 md:my-6">{props.poste}</p>
            </div>
            <div className="flex justify-center">
                <a className="bg-[#2B6ED1] text-white text-lg py-1 px-3 md:py-2 md:px-6 rounded-2xl mb-6" href={props.more}>Club website</a>
            </div>
        </div>
    );
}

export default ClubCard