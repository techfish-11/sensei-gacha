// ガチャガチャが引けるページ
import Image from "next/image";

//ランダムに画像を出す
const Hero = () => {
    const images = [
        "/sensei-gacha/hero.png",
        "/sensei-gacha/hero2.png",
        "/sensei-gacha/hero3.png",
        "/sensei-gacha/hero4.png",
        "/sensei-gacha/hero5.png",
        "/sensei-gacha/hero6.png",
        "/sensei-gacha/hero7.png",
        "/sensei-gacha/hero8.png",
        "/sensei-gacha/hero9.png",
        "/sensei-gacha/hero10.png",
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    return (
        <div className="hero">
            <Image
                src={randomImage}
                alt="sensei"
                width={300}
                height={300}
            />
        </div>  
    );
};