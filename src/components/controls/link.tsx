import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ButtonLink = ({ title, type, to, icon, active }: { title: string; type: string; to: string; icon: any; active?: boolean }) => {
    const themeFromType = () => {
        switch (type) {
            case "primary":
                return "bg-sky-800 text-white";
            case "secondary":
                return "bg-gray-300 text-sky-900";
            default:
                return "bg-sky-800 text-white";
        }
    };

    const getButtonStyle = () => {
        let buttonStyle = `px-4 h-9 rounded-md ${themeFromType()} hover:shadow-sm flex items-center gap-2`;

        if (active) {
            if (type === "secondary") {
                buttonStyle += " border-2 border-sky-800";
            }
            if (type === "primary") {
                buttonStyle += " bg-sky-900 ";
            }
        }

        return buttonStyle;
    };

    return (
        <Link href={to} className={getButtonStyle()}>
            <FontAwesomeIcon icon={icon} /> {title}
        </Link>
    );
};

export default ButtonLink;