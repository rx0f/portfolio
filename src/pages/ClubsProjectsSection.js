import ClubCard from "../components/ClubCard";
import Shellmates from "../images/shellmates.png"
import GDG from "../images/gdg.png"
import SOAI from "../images/soai.jpg"
import Project from "../components/Project";

const ClubsProjectsSection = () => {
    return (
        <section>
            
            <div className="font-['Montserrat'] py-[4%] px-[8%]">
                <div className="md-[75%] lg:w-[50%]">
                    <div className="text-3xl md:text-5xl lg:text-6xl font-bold my-8">
                        <h2 className="my-2">Clubs {'&'} projects</h2>
                    </div>
                    <div className="flex text-md md:text-xl lg:text-2xl my-8">
                            <div className="h-0.5 md:w-6 lg:w-10 bg-black my-3 mr-4"/>
                            <p>
                                Clubs that i'm a member with them and the projects that i collaborated or still collaborating
                            </p>
                    </div>
                </div>
                <div className="flex mt-12 mb-8 flex-col items-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Clubs</h2>
                    <div className="w-10 h-1 bg-[#1CE9B6] my-2"/>
                </div>
                <div className="flex flex-col items-center lg:flex-row justify-evenly">
                    <ClubCard name="GDG Algiers" logo={GDG} poste="Development department member" more="https://www.gdgalgiers.com/"/>
                    <ClubCard name="Shellmates" logo={Shellmates} poste="Development department co-manager" more="https://www.shellmates.club/"/>
                    <ClubCard name="SOAI Algiers" logo={SOAI} poste="Development department member" more="http://algierschoolofai.tech/"/>
                </div>
                <div className="flex mt-12 mb-8 flex-col items-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Projects</h2>
                    <div className="w-10 h-1 bg-[#1CE9B6] my-2"/>
                </div>
                <div className="flex-col items-center">
                    <div className="flex justify-evenly flex-col items-center md:flex-row">
                        <Project logo={GDG} text="CMS Newsletter"/>
                        <Project logo={GDG} text="DevFest 2021 website"/>
                        <Project logo={Shellmates} text="PVs discord bot (Unfinished)"/>
                    </div>
                    <div className="flex justify-evenly flex-col items-center md:flex-row">
                        <Project logo={Shellmates} text="Shellmates website (Unfinished)"/>
                        <Project logo={GDG} text="WTM website (Unfinished)"/>
                        <Project logo={SOAI} text="AI day website (Unfinished)"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClubsProjectsSection;