interface ButtonProps {
    children: React.ReactNode;
    textColor: string;
    backgroundColor?: string;
    type: 'default' | 'link';
    hoverColor?: string;
    onClick?: ()=> void;
}

export default function Button({ children, textColor, backgroundColor, type, hoverColor, onClick }: ButtonProps) {

    const getButtonClassses = (type: string) => {
        switch (type) {
            case 'default':
                return 'inline-flex items-center px-6 py-3 rounded-full font-poppins font-medium transition-colors';
            case 'link':
                return 'inline-flex items-center py-3 rounded-full font-poppins font-medium transition-colors';
        }
    };

    return (
        <>
            <button onClick={onClick} className={`group ${getButtonClassses(type)} text-${textColor} bg-${backgroundColor} ${hoverColor}`}>
                {children}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </button>
        </>
    )
}