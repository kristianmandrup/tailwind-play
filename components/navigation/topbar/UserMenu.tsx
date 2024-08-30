import React from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import { MdOutlineAccountCircle, MdKeyboardArrowDown } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useUserSession } from "../../../contexts/UserSessionContext";

type UserMenuProps = {
  user?: { name?: string | null };
  handleSignIn?: () => void;
  handleSignOut?: () => void;
};

const UserMenu: React.FC<UserMenuProps> = ({ handleSignIn, handleSignOut }) => {
  const { user, login, logout } = useUserSession();
  handleSignIn = handleSignIn ?? login;
  handleSignOut = handleSignOut ?? logout;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="p-0 bg-transparent" radius="sm" variant="light">
          <MdOutlineAccountCircle className="text-2xl" />
          <MdKeyboardArrowDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="User settings">
        {user ? (
          <>
            <DropdownItem as={Link} href={`/user/edit/${user.name}`}>
              <FaUserEdit className="text-2xl mr-2" />
              Edit Profile
            </DropdownItem>
            <DropdownItem as={Link} href="/user/changePassword">
              <MdOutlineAccountCircle className="text-2xl mr-2" />
              Change Password
            </DropdownItem>
            <DropdownItem color="warning" onClick={handleSignOut}>
              Logout
            </DropdownItem>
          </>
        ) : (
          <DropdownItem onClick={handleSignIn}>Login</DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserMenu;
