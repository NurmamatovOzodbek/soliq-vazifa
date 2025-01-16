import { Link } from "react-router-dom";
import { TeacherCard } from "../../../../components";
import TeacherImg from "../../../../assets/images/direktor.png";

const teachers = [
  {
    id: 1,
    teacherImg: TeacherImg,
    name: "G'anixodjayeva Muxayo Saidovna",
    position: "Direktor",
  },
  {
    id: 2,
    teacherImg: TeacherImg,
    name: "	Kayumova Barno Abdunabiyevna",
    position: "Direktor o‘rinbosari",
  },
  {
    id: 3,
    teacherImg: TeacherImg,
    name: "Xudjamurodova Rixsi Avlayevna",
    position: "Direktor o‘rinbosari",
  },
  {
    id: 4,
    teacherImg: TeacherImg,
    name: "Zafarova Gulbahor Miragzamovna",
    position: "Direktor o‘rinbosari",
  },
];
export function TeacherSection() {
  return (
    <section className="container flex flex-col gap-y-[32px]">
      <div className="flex justify-between items-center">
        <h2 className="leading-[44px] text-[28px] text-[#0B2441] font-bold">
          Maktab rahbariyati
        </h2>
        <Link
          to="/teachers"
          className="font-medium text-base hover:text-blue-500 transition hover:scale-[1.04]"
        >
          Barcha o'qituvchilar
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {teachers.map((teacher) => {
          const { id, teacherImg, name, position } = teacher;
          return (
            <TeacherCard
              key={id}
              teacherImg={teacherImg}
              name={name}
              position={position}
            />
          );
        })}
      </div>
    </section>
  );
}
