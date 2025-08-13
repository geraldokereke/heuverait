interface TextProps {
    children: React.ReactNode;
    size: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
    font?: string;
    color?: string;
    weight?: string;
    leading?: string;
    className?: string;
}

export default function Text({ children, size, font = "poppins", color = "black", weight = "medium", leading, className }: TextProps) {
    const TextClasses = (size: string) => {
        switch (size) {
            case '4xl':
                return 'text-2xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl';
            case '3xl':
                return 'text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl';
            case '2xl':
                return 'text-sm md:text-base lg:text-sm xl:text-base 2xl:text-2xl';
            case 'xl':
                return 'text-[10px] xl:text-sm 2xl:text-xl';
            case 'lg':
                return 'text-sm md:text-lg lg:text-xs xl:text-sm 2xl:text-lg';
            case 'md':
                return 'text-[10px] xl:text-sm 2xl:text-md';
            case 'sm':
                return 'text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm';
            case 'xs':
                return 'text-[8px] xl:text-[10px] 2xl:text-xs';
            case 'xxs':
                return 'text-[4px] lg:text-[6px] xl:text-[8px] 2xl:text-[10px]';
        }
    };
    return (
        <h1 className={`${TextClasses(size)} font-${font} text-${color} font-${weight} leading-${leading} ${className}`}>{children}</h1>
    )
}