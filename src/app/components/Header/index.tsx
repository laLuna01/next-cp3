import Image from "next/image";
const Header = () => {
    return (
        <>
            <header>
                <Image src="/logo.png" alt="logo" width={80} height={80} />
                <p>Os melhores filmes estão aqui</p>
            </header>
        </>
    );
};

export default Header;