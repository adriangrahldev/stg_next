"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTachometerAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from 'next/navigation';


const Sidebar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => path === pathname;

    const routes = [
        {
            name: "Dashboard",
            icon: faTachometerAlt,
            path: "/",
        },
        {
            name: "Users",
            icon: faUsers,
            path: "/users",
        },
        {
            name: "Settings",
            icon: faCog,
            path: "/settings",
        },
    ];

    return (
        <div className="h-screen shadow-md w-64 flex flex-col">
            <div className="text-sky-950 px-8">
                <ul className="pt-6 pb-20">
                    <li className="font-extrabold text-2xl">
                        ST<span className="text-blue-800">Guardian</span>
                    </li>
                </ul>
                <ul className="space-y-4 ">
                    {routes.map((route, index) => (
                        <li key={index}>
                            <Link href={route.path} className={`py-2 px-3 flex items-center rounded-lg hover:bg-sky-800 hover:text-white hover:shadow-md ${isActive(route.path) ? 'bg-sky-800 text-white shadow-md' : ''}`}>
                                <FontAwesomeIcon icon={route.icon} width={20} className="mr-2" />
                                {route.name}

                            </Link>
                        </li>
                    ))}
                </ul>


            </div>
        </div>
    );
};

export default Sidebar;
