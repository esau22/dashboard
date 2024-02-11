import { RiMenu2Line } from "react-icons/ri";
import { DropdownMessage } from "./dropdown-message";
import { DropdownUser } from "./dropdown-user";
import { DropdownNotification } from "./dropdown-notification";
import { ButtonIcon } from "../ui/button-icon";
import { IoSearchSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="sticky top-0 flex w-full h-[6.8vw] bg-dark border-b border-gray-500/30">
      <div className="flex flex-grow items-center justify-between px-14 ml-36 -mr-8">
        <ButtonIcon
          icon={IoSearchSharp}
          onClick={() => {}}
          className="flex-1 size-12 text-white hover:text-primary transition-colors duration-300"
        />
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full bg-transparent font-medium focus:outline-none xl:w-125 ml-1"
        />

        <div className="flex items-center gap-5 2xsm:gap-7">
          <ul className="flex items-center gap-4 2xsm:gap-6">
            <DropdownNotification />
            <DropdownMessage />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};
