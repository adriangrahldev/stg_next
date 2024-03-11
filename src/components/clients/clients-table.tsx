import { IClient } from "../../interfaces/client.interface";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@headlessui/react";
import ClientsTableActions from "./clients-table-actions";
import TableUI from "../controls/table";
import React from "react";

const ClientsTable = (props: { clients: IClient[] }) => {
    
    const data = {
        columns: ["Nome", "E-mail", "Telefone", "CPF", "Endereço", "CEP", "Estado", "Cidade"],
        rows: props.clients.map(client => {
            return [
                client.name,
                client.email,
                client.phone,
                client.cpf,
                client.address,
                client.cep,
                client.state,
                client.city
            ];
        }),
        actions: {
            edit: true,
            delete: true,
            view: true
        }
    };

    return (
        <TableUI 
            data={data}
        />
    );
}
export default ClientsTable;