import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({ title, type, onClick, icon, active }: { title: string; type: string; onClick: () => void; icon: any; active?: boolean }) => {
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
        let buttonStyle = `px-4 h-9 rounded-md ${themeFromType()} hover:shadow-sm`;

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
        <button onClick={onClick} className={getButtonStyle()}>
            <FontAwesomeIcon icon={icon} /> {title}
        </button>
    );
};

export default Button;