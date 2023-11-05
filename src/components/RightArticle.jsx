import { AboutText, Button, AboutText2, DescriptionText } from "./helpers"
import { flavours } from "../constants"

const RightArticle = () => {
    return (
        <div className="w-[50%] sm:w-[40%] right-article z-20 flex flex-col mt-40 gap-10 lg:gap-40 absolute right-0">
            <div>
                <Button type="contained" text="#TakeATaste" cursor />
                <AboutText>
                    Best <span className="text-[#b1a99c]">Coke</span> <br /> Ever ?
                </AboutText>
            </div>
            <div>
                <AboutText mt>
                    Cosmic <br /> Flavours.
                </AboutText>
                <Button type="contained" text="order now" />
            </div>
            <div>
                <div className="flex flex-col gap-5">
                    <AboutText2 text="Zero Sugar !" />
                    <DescriptionText>
                        Enjoy the refreshment of Coca-Cola with zero sugar
                    </DescriptionText>
                </div>
                <div className="flex flex-col mt-20 gap-5">
                    <AboutText2 text="of course, it has multiple Flavours !" />
                    {flavours.map((flavour, index) => (
                        <DescriptionText key={index}>
                            <span className="text-[#c52644] text-lg sm:text-2xl">{flavour.number}</span>
                            {flavour.text}
                        </DescriptionText>
                    ))}
                </div>
            </div>
            <div>
                <AboutText>
                    All Good <br /> Vibes.
                </AboutText>
                <Button type="contained" cursor text="What are You waiting for ?!" mb />
                <Button type="filled" text="Shop Now" />
            </div>
        </div>
    )
}

export default RightArticle