import React from "react";
import Text from "./text";

interface CTAProps {
    bgColor: string;
    headerText: string;
    headerTextColor: string;
    subHeaderText: string;
    subHeaderTextColor: string;
    children: React.ReactNode;
}

export default function CTA({ bgColor, headerText, headerTextColor, subHeaderText, subHeaderTextColor, children }: CTAProps) {
    return (
        <div className={`text-center w-full mt-0 xl:mt-20 bg-${bgColor} py-16 text-white overflow-hidden px-4`}>
            <Text size="4xl" weight="bold" font="montserrat" color={headerTextColor} className="mb-1 xl:mb-4">
                {headerText}
            </Text>
            <Text size="lg" color={subHeaderTextColor} className="mb-5 xl:mb-8 max-w-2xl mx-auto">
                {subHeaderText}
            </Text>
            <div className="w-full flex flex-row gap-6 justify-center max-h-fit">
                {children}
            </div>
        </div>
    );
}