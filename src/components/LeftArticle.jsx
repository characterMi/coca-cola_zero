import { HeroImg, Poster } from "../assets";
import { StrokeText, DescriptionText } from "./helpers";

const LeftArticle = () => {
    return (
        <div className="w-[50%] sm:w-[60%] left-article">
            <StrokeText>Yup, it's <br /> gonna<br /> be gassy.</StrokeText>
            <div className="w-[400px] text-left mt-[100px] mb-[50px] sm:mb-[100px] lg:mb-[200px]">
                <DescriptionText width>
                    Coca-Cola Zero Sugar has a great taste with zero sugar and calories.
                </DescriptionText>
            </div>
            <img
                src={HeroImg}
                alt="Banner"
                className="banner absolute top-[10%] left-[50%] sm:left-[60%] opacity-0 w-[50%] sm:w-[40%] rounded-[20px]"
            />
            <StrokeText>Made on <br /> Earth,<br /> tastes like <br /> heaven</StrokeText>
            <img
                src={Poster}
                alt="Poster"
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-fill rounded-[20px] mt-20 mb-[50px] sm:mb-[100px] lg:mb-[200px]"
            />
            <StrokeText>Not your <br /> Average<br /> Moon juice</StrokeText>
        </div>
    )
}

export default LeftArticle