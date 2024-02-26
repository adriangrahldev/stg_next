const ClientsPage = () => {
    return (
        <div className="w-full  ">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Clientes</h1>
                    <p className="text-sm text-gray-500">Lista de clientes</p>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Novo cliente</button>
                    <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md ml-2">Importar</button>
                    <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md ml-2">Exportar</button>
                </div>
            </div>
            <div className="my-6">
                <input type="text" placeholder="Pesquisar" className="w-full border-[1px] border-gray-300 p-2 rounded-md" />
            </div>
            <div className="flex justify-between">
                <div>
                    <span>Exibindo 1-10 de 100</span>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Anterior</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">Próximo</button>
                </div>
            </div>
            <div className="my-6">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>CPF</th>
                            <th>Endereço</th>
                            <th>CEP</th>
                            <th>Estado</th>
                            <th>Cidade</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ClientsPage;