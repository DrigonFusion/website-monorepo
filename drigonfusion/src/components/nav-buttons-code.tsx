"use client"; 
import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export function Cards({data}: { data: {name: string, href: string, description: string} }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter>
        <Button variant={"outline"} asChild>
          <Link href={"/code"+data.href}>Visit</Link>
        </Button>
      </CardFooter>
    </Card>
  )
};