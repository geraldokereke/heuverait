interface ButtonProps {
    children: React.ReactNode;
    textColor: 'white' | 'black' | 'gray-600' | 'gray-900' | string;
    backgroundColor?: 'black' | 'white' | 'gray-100' | 'primary' | string;
    type: 'default' | 'link';
    hoverColor?: string;
    onClick?: string;
}

const textColorClasses = {
    white: 'text-white',
    black: 'text-black',
    'gray-600': 'text-gray-600',
    'gray-900': 'text-gray-900',
};

const backgroundColorClasses = {
    black: 'bg-black',
    white: 'bg-white',
    'gray-100': 'bg-gray-100',
    primary: 'bg-[#41a7ad]'
};

export default function Button({
    children,
    textColor = 'black',
    backgroundColor = 'white',
    type,
    hoverColor,
    onClick
}: ButtonProps) {
    const baseClasses = type === 'default'
        ? 'inline-flex items-center px-4 lg:px-3 xl:px-4 2xl:px-6 py-2 lg:py-1 xl:py-2 2xl:py-3 rounded-md font-poppins font-medium transition-colors text-[10px] md:text-base lg:text-xs xl:text-sm 2xl:text-base'
        : 'inline-flex items-center py-3 rounded-md font-poppins font-medium transition-colors text-xs md:text-base lg:text-xs xl:text-sm 2xl:text-base';

    // Handle predefined colors or custom colors
    const textColorClass = textColorClasses[textColor as keyof typeof textColorClasses] || `text-[${textColor}]`;
    const bgColorClass = backgroundColor
        ? backgroundColorClasses[backgroundColor as keyof typeof backgroundColorClasses] || `bg-[${backgroundColor}]`
        : '';

    return (
        <a
            href={onClick}
            className={`group cursor-pointer ${baseClasses} ${textColorClass} ${bgColorClass} ${hoverColor || ''}`}
        >
            {children}
            <svg className="ml-2 size-3 md:size-4 lg:size-2 xl:size-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
    );
}