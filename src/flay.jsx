// flay.jsx
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Flay({name, solutions = [], callsToAction = [] }) {
  return (
    <Popover className="relative">
      <PopoverButton className="w-2xl inline-flex items-center gap-x-1 text-sm/6 font-semibold text-white m-2.5 p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg ring-1 ring-gray-900/5 hover:ring-gray-900/10 transition duration-300 ease-in-out">
        <span>{name}</span>
        <ChevronDownIcon aria-hidden="true" className="size-10" />
      </PopoverButton>

      <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div className="flex justify-between w-full items-center gap-2">
                  <a href={item.href} className="relative z-10 font-semibold text-gray-900 after:content-['..................................................................................'] after:flex-1 after:ml-2 after:overflow-hidden after:whitespace-nowrap after:text-gray-400 after:text-ellipsis after:block">
                    {item.name}
                  </a>
                  <span className="text-gray-900 whitespace-nowrap">{item.price}</span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
