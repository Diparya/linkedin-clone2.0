import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";


export default async function Home() {
  const user = await currentUser();

  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:inline md:col-span-2">
        <Sidebar user={user} />
      </section>

      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
        <Feed user={user} />
      </section>

      <section className="hidden xl:inline justify-center col-span-2">
        <News />
      </section>
    </div>
    //  <div className="pt-20">
    //   <div className="max-w-6xl mx-auto flex justify-between gap-8">
    //       {/* Sidebar  */}
    //       <Sidebar user = {user}/>
    //       {/* Feed  */}
    //       <Feed user={user}/>
    //       {/* News  */}
    //       <News/>
    //   </div>
    //  </div>
  );
}
