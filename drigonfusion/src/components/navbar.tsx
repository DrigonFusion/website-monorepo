"use client"
import { pages, socials } from "~/lib/consts";
import { cn } from "@/lib/utils";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface NavbarProps {
  userPFP: string;
  userName: string;
}

export function Navbar({ userPFP, userName }: NavbarProps): React.JSX.Element {
  return (
    <div className="flex items-center justify-between h-16 bg-secondary text-secondary-foreground w-full top-0 p-5 shadow-lg">
      <div className="flex-1 items-center">

      </div>
      <div className="flex-1 flex justify-center">
        <NavMenu />
      </div>
      <div className="flex-1 flex justify-end">
      <Avatar>
        <AvatarImage src={userPFP} alt={userName} />
        <AvatarFallback>{userName}</AvatarFallback>
      </Avatar>
      </div>
    </div>
  )
}

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {
                pages.map((data) => (
                  <ListItem
                    key={data.name}
                    title={data.name}
                    href={data.href}
                  >
                    {data.description}
                  </ListItem>
                ))
              }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              DrigonFusion
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Socials</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {
                socials.map((data) => (
                  <ListItem
                    key={data.name}
                    title={data.name}
                    href={data.href}
                  >
                    {data.description}
                  </ListItem>
                ))
              }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  )
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"