import React, { use } from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  PlusIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
 
// profile menu component
const profileMenuItems = [
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

interface User {
    fullName: string;
    email: string;
}
 
export default function Profile() {
  const route = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
 
  useEffect(() => {
    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8080/api/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                setUser(null);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    fetchProfile();
  }, []);

  const handleSignOut = async (e) => {
    localStorage.removeItem('token');
    route.push('/');
    location.reload();
    setIsMenuOpen(false);
  }
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0"
        >
          <Avatar
            variant="circular"
            size="md"
            alt="tania andrew"
            withBorder={true}
            color="blue-gray"
            className=" p-0.5"
            src="https://docs.material-tailwind.com/img/face-2.jpg"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {/* Tampilkan fullName di atas menu */}
        {user && (
          <div>
            <Typography variant="small" className="px-4 py-2">
            Assalamualaikum
          </Typography>
          <Typography variant="h6" className="px-4 py-2">
            {user.fullName}
          </Typography>
          </div>
        )}
        <Typography variant="small" className="px-4">
          Buat Akun Masjid & Mulai Berkontribusi 
        </Typography>
        <div className="w-full flex items-center">
          <Button
            variant="filled"
            color="blue-gray"
            className="w-full mx-4 my-2 items-center flex justify-center rounded-sm"
            onClick={() => route.push('/register-masjid')}
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={handleSignOut}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}