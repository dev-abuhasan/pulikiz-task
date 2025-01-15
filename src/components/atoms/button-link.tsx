import Link from "next/link";
interface ButtonLinkProps {
    label?: string;
    href: string;
    success?: boolean;
    iconBefore?: any;
    iconAfter?: any;
    outlined?: boolean;
    dark?: boolean;
    children?: React.ReactNode;
    className?: string;
    rounded?: boolean;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

const ButtonLink = ({ label, target = '_self', href = "/", success, iconBefore, iconAfter, outlined, dark, children, className, rounded }: ButtonLinkProps) => {
    const buttonClass = () => {
        if (dark && outlined) {
            return 'ring-2 ring-dark hover:ring-dark-400 ring-offset-gray-400';
        } else if (dark) {
            return 'ring-2 ring-dark bg-dark hover:from-dark hover:to-dark-400 text-white hover:ring-dark-400 ring-offset-gray-900';
        } else if (outlined) {
            if (success) return 'ring-2 ring-success text-success hover:ring-emerald-400 ring-offset-emerald-300';
            return 'ring-2 ring-brand text-brand hover:ring-orange-400 ring-offset-orange-300';
        } else {
            if (success) return 'ring-2 ring-success bg-success hover:from-success hover:to-emerald-400 text-white hover:ring-emerald-400 ring-offset-emerald-300';
            return 'ring-2 ring-brand bg-brand hover:from-brand hover:to-orange-400 text-white hover:ring-orange-400 ring-offset-orange-300';
        }
    }
    const spanClass = () => {
        if (dark && outlined) {
            return 'bg-gray-900 dark:bg-gray-100';
        } if (outlined) {
            return 'bg-gray-900 dark:bg-gray-100';
        } else if (dark) {
            return 'bg-white';
        } else {
            return 'bg-dark';
        }
    }
    return (
        <Link target={target} href={href} className={`inline-flex items-center px-5 py-0.5 md:py-2.5 overflow-hidden group relative hover:bg-gradient-to-r hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300 ${buttonClass()} ${className} ${rounded ? 'rounded-3xl' : 'rounded'}`}>
            <span className={`absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 opacity-10 rotate-12 group-hover:-translate-x-40 ease ${spanClass()}`}></span>
            {iconBefore && iconBefore}
            {children ? children : <span className={`relative ${(iconAfter || iconBefore) ? 'pt-0.5 px-1' : 'py-px'}`}>{label || 'Follow Me!'}</span>}
            {iconAfter && iconAfter}
        </Link>

    );
};

export default ButtonLink;