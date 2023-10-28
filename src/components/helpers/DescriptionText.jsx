const DescriptionText = ({ children, width }) => (
  <p className={`text-[12px] md:text-[16px] lg:text-[20px] ${width && 'w-[50%] sm:w-[60%] md:w-auto'}`}>
    {children}
  </p>
)

export default DescriptionText