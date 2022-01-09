const Navbar = () => {
    return (
        <nav className="font-['Montserrat'] text-[#757575] py-4">
            <div className="w-full flex justify-center text-xl">
                <a href="">Home</a>
                <a className="mx-[4%]" href="">About</a> 
                <a href="">Clubs {'&'} Projects</a>
            </div>
        </nav>
    );
}

export default Navbar