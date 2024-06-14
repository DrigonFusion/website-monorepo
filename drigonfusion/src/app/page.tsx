import { pages } from "~/lib/consts";
import { Cards } from "@/components/nav-buttons-home";

export default async function HomePage() {
  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold text-center">DrigonFusion</h1>
      <p className="text-center">Pages</p>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 w-full auto-rows-auto gap-4 grid-flow-row">
        {
          pages.map((data) => (
            <Cards key={data.name} data={data} />
          ))
        }
      </div>
    </main>
  );
};

