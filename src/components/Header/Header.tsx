"use client"
import { faDollarSign, faPersonCirclePlus, faPlus, faUserCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Fragment, use, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, CogIcon, LockClosedIcon, UserIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useUser from '@/hooks/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SessionProvider, useSession } from 'next-auth/react';

const solutions = [
    { name: 'Perfil', description: '', href: '#', icon: UserIcon },
    { name: 'Configurações', description: '', href: '#', icon: CogIcon },
]
const callsToAction = [
    { name: 'Sair', href: '/logout', icon: LockClosedIcon },
]

const Header = () => {
    const pathname = usePathname();

    const session = useSession();
    

    const navigation = [
        {
            name: "Ventas",
            href: "/ventas",
            icon: faDollarSign,
            current: false
        },
        {
            name: "Compras",
            href: "/compras",
            icon: faDollarSign,
            current: false
        },
        {
            name: "Clientes",
            href: "/clientes",
            icon: faUserPlus,
            current: false
        },
        {
            name: "Productos",
            href: "/productos",
            icon: faPlus,
            current: false
        },
        {
            name: "Usuarios",
            href: "/usuarios",
            icon: faPersonCirclePlus,
            current: false
        }
    ]
    const userNavigation = [
        { name: 'Perfil', href: '#' },
        { name: 'Ajustes', href: '#' },
        { name: 'Cerrar sesión', href: '#' },
    ]


    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }


    const headerFastActions = [
        {
            name: "Ventas",
            href: "/ventas",
            icon: faDollarSign,
        },
        {
            name: "Compras",
            href: "/compras",
            icon: faDollarSign,
        },
        {
            name: "Clientes",
            href: "/clientes",
            icon: faUserPlus,
        },
        {
            name: "Productos",
            href: "/productos",
            icon: faPlus,
        },
        {
            name: "Usuarios",
            href: "/usuarios",
            icon: faPersonCirclePlus,
        }
    ];




    return (
        pathname.split("/")[1] === "auth" ? null : (

            <Disclosure as="nav" className="bg-slate-100">
                {({ open }) => (
                    <>
                        <div className=" sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="hidden md:block">
                                        <div className="flex items-baseline space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-sky-800 text-white'
                                                            : 'text-sky-800 bg-gray-300 hover:bg-sky-800 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <button
                                            type="button"
                                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400">
                                                <span className="sr-only">Unread notifications</span>
                                            </span>
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex max-w-xs items-center pe-3 rounded-full bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-sky-950 font-semibold">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <FontAwesomeIcon icon={faUserCircle} className="h-8 w-8 mr-2 rounded-full" />
                                                    {session.data?.user?.firstName} {session.data?.user?.lastName}
                                                    {session.status === "loading" ?
                                                        <div className="w-4 h-4 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
                                                        : null}
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <FontAwesomeIcon icon={faUserCircle} className="h-10 w-10 rounded-full" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">{session?.data?.user?.firstName}</div>
                                        <div className="text-sm font-medium leading-none text-gray-400">{session.data?.user?.email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )
    );
};

export default Header;