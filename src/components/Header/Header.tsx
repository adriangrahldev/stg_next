"use client"
import { faChevronDown, faChevronUp, faDollarSign, faPersonCirclePlus, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, CogIcon, LockClosedIcon, UserIcon } from '@heroicons/react/20/solid'

const solutions = [
    { name: 'Perfil', description: '', href: '#', icon: UserIcon },
    { name: 'Configurações', description: '', href: '#', icon: CogIcon },
  ]
  const callsToAction = [
    { name: 'Sair', href: '/logout', icon:  LockClosedIcon},
  ]
  
const Header = () => {


    const user = {
        name: "Adrian G. Maciel",
        email: "adriangrahl@soluntech.com.br",
        role: "Admin",
    };

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
        <header className="py-5 px-2 flex items-center justify-between ">
            
            <div className="flex items-center gap-x-4">
                <nav className="flex items-center gap-x-4">
                    {headerFastActions.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-900 bg-gray-300 p-1 px-2 rounded-md hover:text-white hover:bg-sky-800">
                            <FontAwesomeIcon icon={item.icon} />
                            <span className='ml-2'>{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>
            <div className='mx-4'>
                <div className="relative"></div>
                <Popover className="relative">
                    <Popover.Button className="inline-flex bg-gray-200 rounded-lg p-2 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                        <span>{user.name}</span>
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute right-0 z-10 mt-5 flex w-screen max-w-max ">
                            <div className=" w-72 flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                <div>
                                    {solutions.map((item) => (
                                        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50">
                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className='flex items-center'>
                                                <a href={item.href} className="font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </header>
    );
};

export default Header;