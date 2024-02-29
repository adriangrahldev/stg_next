"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCog, faDatabase, faDollarSign, faNetworkWired, faTachometerAlt, faUserGroup, faUsers, faWarning } from "@fortawesome/free-solid-svg-icons";
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
            name: "Vendas",
            icon: faDollarSign,
            path: "/sales",
        },
        {
            name: "Clientes",
            icon: faUsers,
            path: "/clients",
        },
        {
            name: "Inventário",
            icon: faBox,
            path: "/inventory",
        },
        {
            name: "Usuários",
            icon: faUserGroup,
            path: "/users",
        },
        {
            name: "Serviços",
            icon: faNetworkWired,
            path: "/settings",
        },
        {
            name: "Configurações",
            icon: faCog,
            path: "/settings",
        },
    ];

    return (
        
            pathname.split("/")[1] === "auth" ? null : (

                <div className="h-screen w-64 flex flex-col shadow-lg">
                    <div className="text-sky-950 px-8">
                        <ul className="py-6">
                            <li className="font-extrabold text-2xl">
                                ST<span className="text-sky-800">Guardian</span>
                            </li>
                        </ul>
                        <ul className="space-y-4 mt-2 ">
                            {routes.map((route, index) => (
                                <li key={index}>
                                    <Link href={route.path} className={`py-1 px-1 flex items-center rounded-lg hover:bg-sky-800 hover:text-white ${isActive(route.path) ? 'bg-sky-800 text-white' : ''}`}>
                                        <FontAwesomeIcon icon={route.icon} width={20} className="mr-2" />
                                        {route.name}

                                    </Link>
                                </li>
                            ))}
                        </ul>


                    </div>
                </div>
            )
        
    );
};

export default Sidebar;
