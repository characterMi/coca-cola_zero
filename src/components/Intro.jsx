import { Ice } from "../assets";
import { Button, DescriptionText } from "./helpers";

const Intro = () => {
    return (
        <>
            <h1 className="text-[100px] sm:text-[150px] md:text-[250px] lg:text-[350px] xl:text-[450px] zero">ZERO</h1>
            <img
                loading="lazy"
                src={Ice}
                alt="Ice"
                className="w-full object-cover -mt-[10%] md:-mt-[20%] z-[1]"
            />
            <div className="flex items-center justify-between w-[100%] sm:w-[500px] md:w-[600px] lg:w-[700px] mt-20 text-xl">
                <div className="w-[60%] sm:w-[300px] md:w-[400px] text-left">
                    <DescriptionText>
                        Coca-Cola Zero Sugar has more real Coca-Cola flavor, still without any sugar.
                    </DescriptionText>
                </div>
                <Button type='filled' text="order now" />
            </div>
        </>
    )
}

export default Intro