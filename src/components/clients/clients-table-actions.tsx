import { faCog, faListDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const ClientsTableActions = (props: {clientId:string|number}) => {
   


    return (
        <Popover>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button>
            <ChevronDownIcon className={open ? 'rotate-180 transform' : ''} />
          </Popover.Button>
          <Popover.Panel>
            <a href="/insights">Insights</a>
            <a href="/automations">Automations</a>
            <a href="/reports">Reports</a>
          </Popover.Panel>
        </>
      )}
    </Popover>
    );
}
export default ClientsTableActions;