// import { Courses } from "./components";
import { PromoSection, Courses } from "./components";
export function HomePage() {
  return (
    <main className="flex flex-col gap-y-[80px]">
      <PromoSection />
      <section className="container flex flex-col gap-y-[32px]">
        <h2 className="leading-[44px] text-[28px] text-[#0B2441] font-bold">
          Biz o'rgatadigan kurslar
        </h2>
        <Courses />
      </section>
    </main>
  );
}
