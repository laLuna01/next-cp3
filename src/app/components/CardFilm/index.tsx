import Image from "next/image";
interface CardProps {
    title: string;
    image: string;
    link: string;
}

const CardFilm = (props : CardProps) => {
    return (
        <div className="cardFilm">
            <h3>{props.title}</h3>
            <Image src={props.image} alt="banner filme" width={80} height={100} />
            <button><a href={props.link}>Assistir</a></button>
        </div>
    );
};

export default CardFilm;