import { useEffect, useState } from "react";
import { apiClients } from "../../services/ApiClient";
import {
  PromoSection,
  Courses,
  TeacherSection,
  News,
  FAQ,
  ContactSection,
} from "./components";
export function HomePage() {
  const { getFetch } = apiClients;
  const [teachers, setTeachers] = useState([]);
  // useEffect(() => {
  //   getFetch("teachers")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <main className="flex flex-col gap-y-[80px] pb-[80px]">
      <PromoSection />
      <Courses />
      <TeacherSection />
      <News />
      <FAQ />
      <ContactSection />
    </main>
  );
}
