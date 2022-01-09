import { FiFacebook, FiInstagram, FiLinkedin, FiSend, FiTwitter } from "react-icons/fi";
import Img1 from '../images/1.png'

const HeroSection = () => {
    return (
        <section>
            <div className="font-['Montserrat'] flex lg:flex-row flex-col-reverse items-center py-[4%] px-[8%] justify-between">
                <div>
                    <div className="text-3xl md:text-5xl lg:text-6xl font-bold my-8">
                        <h2 className="my-2">We have</h2>
                        <h2 className="my-2">Web experience</h2>
                    </div>
                    <div className="flex text-md md:text-xl lg:text-2xl my-8">
                            <div className="h-0.5 md:w-6 lg:w-10 bg-black my-3 mr-4"/>
                            <p>
                                Hi! I'm <span className="uppercase text-[#00BFA5]">Abderaouf Louggani</span>
                                <br />
                                Web developer
                            </p>
                    </div>
                    <a className="flex items-center justify-evenly text-white text-md md:text-xl bg-[#4285F4] rounded-3xl w-28 md:w-44 md:p-4 p-2 my-4 md:my-8 lg:my-16" href="https://www.linkedin.com/in/abderaouf-louggani-935b50206/">
                        Let's talk <FiSend/>
                    </a>
                    <div className="flex items-center md:mt-20 lg:mt-40">
                        <h4 className="text-sm md:text-xl">
                            Checkout out my
                        </h4>
                        <div className="flex ml-0.5 md:mx-6 text-md md:text-2xl">
                            <a className="mx-0.5 md:mx-2 bg-gray-200 p-2 md:p-4 rounded-full" href="https://www.instagram.com/raouf.lgn/">
                                <FiInstagram/>
                            </a>
                            <a className="mx-0.5 md:mx-2 bg-gray-200 p-2 md:p-4 rounded-full" href="https://www.facebook.com/raouf.lgn/">
                                <FiFacebook/>
                            </a>
                            <a className="mx-0.5 md:mx-2 bg-gray-200 p-2 md:p-4 rounded-full" href="https://www.linkedin.com/in/abderaouf-louggani-935b50206/">
                                <FiLinkedin/>
                            </a>
                            <a className="mx-0.5 md:mx-2 bg-gray-200 p-2 md:p-4 rounded-full" href="https://twitter.com/RaoufLGN">
                                <FiTwitter/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] md:w-[40%] rounded-full overflow-hidden bg-[#1CE9B6]">
                    <img src={Img1} alt="" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection