import TeacherImg from "../../assets/images/direktor.png";
export function TeacherCard({ teacherImg, name, position }) {
  return (
    <article className="flex flex-col w-[280px] gap-y-4 items-center pt-5">
      <div>
        <img src={teacherImg} alt={name} />
      </div>
      <div className="flex flex-col gap-y-2 items-center font-semibold text-[#0B2441]">
        <strong className="text-xl text-center">{name}</strong>
        <span className="text-xl">{position}</span>
      </div>
    </article>
  );
}
