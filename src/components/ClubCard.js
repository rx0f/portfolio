const ClubCard = (props) => {
    return (
        <div className="w-[30%] bg-gray-100 rounded-2xl">
            <div className="flex items-center p-4">
                <div className="w-[15%] rounded-full overflow-hidden">
                    <img src={props.logo} alt="" />
                </div>
                <h3 className="text-2xl mx-2 font-bold">{props.name}</h3>
            </div>
            <div className="w-[90%] h-[0.1rem] bg-gray-300 mx-auto"/>
            <div>
                <p className="mx-20 my-6">{props.poste}</p>
            </div>
            <div className="flex justify-center">
                <a className="bg-[#2B6ED1] text-white py-2 px-6 rounded-2xl mb-6" href={props.more}>Club website</a>
            </div>
        </div>
    );
}

export default ClubCard