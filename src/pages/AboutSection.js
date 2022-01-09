import {FaMapMarkerAlt, FaUserGraduate, FaPhone, FaEnvelope, FaHtml5, FaCss3, FaJsSquare, FaReact, FaDiscord} from "react-icons/fa";
import {SiFlutter, SiUnrealengine} from "react-icons/si"

const AboutSection = () => {
    return (
        <section className="bg-[#1CE9B6] font-['Montserrat']">
            <div className="py-[2%] px-[8%] flex flex-col lg:flex-row lg:justify-between">
                <div>
                    <div className="text-3xl md:text-5xl lg:text-6xl font-bold my-8">
                        <h2 className="my-2">About me</h2>
                    </div>
                    <div className="flex text-md md:text-xl lg:text-2xl my-8">
                            <div className="h-0.5 md:w-6 lg:w-10 bg-black my-3 mr-4"/>
                            <p>
                                Some informations about me {'&'} my skills
                            </p>
                    </div>
                </div>
                <div>
                    <div className="w-[80%] md:w-[38rem] h-0.5 bg-black mb-3 mt-6"/>
                    <div className="flex">
                        <h3 className="md:text-xl lg:text-2xl font-bold">01/</h3>
                        <div className="ml-4">
                            <h2 className="md:text-3xl lg:text-4xl font-bold">
                                Personnal {'&'} professional
                                <br/>
                                informations
                            </h2>
                            <div className="my-4 text-sm md:text-md lg:text-lg">
                                <div className="flex items-center">
                                    <FaUserGraduate className="mr-2"/>
                                    <p>2CP student at ESI Algiers</p>
                                </div>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2"/>
                                    <p>Bouira, Algeria</p>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="mr-2"/>
                                    <p>+213 541 72 17 36, +213 554 07 56 99</p>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-2"/>
                                    <p>ja_louggani@esi.dz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] md:w-[38rem] h-0.5 bg-black mb-3 mt-6"/>
                    <div className="flex">
                        <h3 className="md:text-xl lg:text-2xl font-bold">02/</h3>
                        <div className="ml-4">
                            <h2 className="md:text-3xl lg:text-4xl font-bold">
                                Skills
                            </h2>
                            <div className="my-4 text-sm md:text-md lg:text-lg">
                                <div className="flex items-center">
                                    <FaHtml5 className="mr-2"/>
                                    <p>HTML</p>
                                </div>
                                <div className="flex items-center">
                                    <FaCss3 className="mr-2"/>
                                    <p>CSS, TailwindCSS</p>
                                </div>
                                <div className="flex items-center">
                                    <FaJsSquare className="mr-2"/>
                                    <p>JavaScript</p>
                                </div>
                                <div className="flex items-center">
                                    <FaReact className="mr-2"/>
                                    <p>React, Gatsby, NextJS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] md:w-[38rem] h-0.5 bg-black mb-3 mt-6"/>
                    <div className="flex">
                        <h3 className="md:text-xl lg:text-2xl font-bold">03/</h3>
                        <div className="ml-4">
                            <h2 className="md:text-3xl lg:text-4xl font-bold">
                                Passions
                            </h2>
                            <div className="my-4 text-sm md:text-md lg:text-lg">
                                <div className="flex items-center">
                                    <SiUnrealengine className="mr-2"/>
                                    <p>Game development</p>
                                </div>
                                <div className="flex items-center">
                                    <FaReact className="mr-2"/>
                                    <p>Web development</p>
                                </div>
                                <div className="flex items-center">
                                    <SiFlutter className="mr-2"/>
                                    <p>Mobile development</p>
                                </div>
                                <div className="flex items-center">
                                    <FaDiscord className="mr-2"/>
                                    <p>Discord bots</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection