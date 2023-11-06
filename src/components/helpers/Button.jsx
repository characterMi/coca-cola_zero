const Button = ({ type, text, cursor, mb }) => (
    <button className={`py-1 px-3 text-[12px] block sm:text-[20px] lg:text-2xl sm:py-2 sm:px-5 rounded-full capitalize ${type === "filled" ? 'bg-[#c52644] text-[#111b27]' : 'border-[#c52644] text-[#c52644] border-2 md:border-4'} ${cursor && 'cursor-auto'} ${mb && 'mb-6'}`}>
        {text}
    </button>
)

export default Button