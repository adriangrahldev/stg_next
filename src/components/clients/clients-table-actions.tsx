"use client";
import { faCog, faListDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

const ClientsTableActions = (props: { clientId: string | number }) => {
  return (
    <Popover>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button>
            <FontAwesomeIcon icon={faCog} className="cursor-pointer" />
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
};
export default ClientsTableActions;
