"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCog,
  faDatabase,
  faDollarSign,
  faNetworkWired,
  faTachometerAlt,
  faUserGroup,
  faUsers,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const Sidebar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light"); // Variable de estado para el tema

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
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Cambia el tema
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return pathname.split("/")[1] === "auth" ? null : (
    <div
      className={`relative h-screen w-64 flex flex-col shadow-lg ${
        theme === "dark" ? "bg-black text-white" : ""
      }`}
    >
      <div className=" px-8">
        <ul className="py-6">
          <li className="font-extrabold text-blue-800 text-2xl">
            ST
            <span
              className={`${theme === "dark" ? "text-white" : "text-slate-500"}`}
            >
              Guardian
            </span>
          </li>
        </ul>
        <ul className="space-y-4 mt-2 ">
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                href={route.path}
                className={`py-1 px-1 flex items-center rounded-lg hover:bg-sky-800 hover:text-white ${
                  isActive(route.path) ? "bg-sky-800 text-white" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={route.icon}
                  width={20}
                  className="mr-2"
                />
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex item-center justify-center w-full gap-2">
          <label
            className={`font-bold ${
              theme === "light" ? "text-sky-800" : "text-white"
            }`}
          >
            {theme === "dark" ? "Oscuro" : "Claro"}
          </label>
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            className={`${
              theme === "dark" ? "bg-sky-800" : "bg-gray-400"
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Toggle theme</span>
            <span
              className={`${
                theme === "dark" ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
