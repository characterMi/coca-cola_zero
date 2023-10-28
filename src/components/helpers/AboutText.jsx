const AboutText = ({ children, mt }) => (
  <h1 className={`text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px] text-[#c52644] ${mt ? 'mt-[250px] sm:mt-[300px] md:mt-[400px] lg:mt-[600px]' : 'mt-10'}`}>
    {children}
  </h1>
)

export default AboutText