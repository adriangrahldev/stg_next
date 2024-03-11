"use client"
import Button from "@/components/controls/button";
import { IClient } from "@/interfaces/client.interface";
import { faFileExport, faFileImport, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect, useState } from "react";
import ClientsTable from '@/components/clients/clients-table';



const ClientsPage = () => {
    const [clients, setClients] = useState([] as IClient[]);

    useEffect(() => {
        const sampleClients = [
            {
                id: 1,
                name: "João da Silva",
                email: "adriangrahlmaciel@gmail.com",
                phone: "48999999999",
                cpf: "123.456.789-00",
                address: "Rua das Flores",
                cep: "88000000",
                state: "SC",
                city: "Florianópolis",
            },
            {
                id: 2,
                name: "Maria da Silva",
                email: "maria@gmail.com",
                phone: "48999999999",
                cpf: "123.456.789-00",
                address: "Rua das Flores",
                cep: "88000000",
                state: "SC",
                city: "Florianópolis"
            },
        ]
        setClients(sampleClients);
    }, []);

    return (
        <div className="w-full px-7 my-8">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl text-sky-900 font-bold">Clientes</h1>
                    <p className="text-sm text-gray-500">Lista de clientes</p>
                </div>
                <div className="flex gap-2">
                    <Button title="Novo cliente" type="primary" onClick={() => {}} icon={faUserPlus} />
                    <Button title="Importar" type="secondary" onClick={() => {}} icon={faFileImport} />
                    <Button title="Exportar" type="secondary" onClick={() => {}} icon={faFileExport} />
                </div>
            </div>
            <div className="my-6 flex">
                <input type="text" placeholder="Pesquisar" className="w-2/4 border-[1px] border-gray-400 p-2 rounded-md" />
            </div>

            <div className="my-6">
                <ClientsTable clients={clients} />
            </div>
        </div>
    );
}

export default ClientsPage;