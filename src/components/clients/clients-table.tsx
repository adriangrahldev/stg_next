import { IClient } from "@/interfaces/client.interface";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@headlessui/react";
import ClientsTableActions from "./clients-table-actions";

const ClientsTable = (props: { clients: IClient[] }) => {
    return (
        <table className="w-full">
            <thead className="bg-gray-300 text-sky-950">
                <tr>
                    <th className="py-2 text-start px-2">Nome</th>
                    <th className="py-2 text-start px-2">Email</th>
                    <th className="py-2 text-start px-2">Telefone</th>
                    <th className="py-2 text-start px-2">CPF</th>
                    <th className="py-2 text-start px-2">Endereço</th>
                    <th className="py-2 text-start px-2">CEP</th>
                    <th className="py-2 text-start px-2">Estado</th>
                    <th className="py-2 text-start px-2">Cidade</th>
                    <th className="py-2 text-start px-2">Editar</th>
                </tr>
            </thead>
            <tbody>
                {props.clients.length > 0 ? props.clients.map((client, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        <td className="py-2 text-start px-2">{client.name}</td>
                        <td className="py-2 text-start px-2">{client.email}</td>
                        <td className="py-2 text-start px-2">{client.phone}</td>
                        <td className="py-2 text-start px-2">{client.cpf}</td>
                        <td className="py-2 text-start px-2">{client.address}</td>
                        <td className="py-2 text-start px-2">{client.cep}</td>
                        <td className="py-2 text-start px-2">{client.state}</td>
                        <td className="py-2 text-start px-2">{client.city}</td>
                        <td className="py-2 text-start px-2">

                            <ClientsTableActions clientId={client.id}  />

                        </td>
                    </tr>
                )) : <tr><td colSpan={8} className="py-10"><div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin mx-auto border-t-transparent"></div></td></tr>}
            </tbody>
        </table>
    );
}
export default ClientsTable;