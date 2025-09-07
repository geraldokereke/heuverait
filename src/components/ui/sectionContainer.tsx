import { ReactNode } from "react";

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
}

const SectionContainer = ({ children, className }: SectionContainerProps) => {
    return (
        <div className={`w-full max-w-2xl md:max-w-4xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20 xl:px-24 flex flex-col gap-14 ${className}`}>
            {children}
        </div>
    );
}
export default SectionContainer;