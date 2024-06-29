import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
  }
  
const Title = ({children}: TitleProps) => {
    return (
      <div className="fade-up">
        <h3 className="text-center md:text-[28px] text-[20px] font-semibold">{children}</h3>
        <div className="h-[5px] u-bg-gradient-01"></div>
      </div>
    );
  };
  
  export default Title;
  