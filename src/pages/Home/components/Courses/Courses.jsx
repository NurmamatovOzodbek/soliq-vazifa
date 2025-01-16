import { CourseCard } from "../../../../components";
import DevelopCourseBg from "../../../../assets/images/dasturlash.png";
import DesignCourseBg from "../../../../assets/images/dizayn.png";
import LogisticCourseBg from "../../../../assets/images/logistika.png";
import VideoEditorCourseBg from "../../../../assets/images/video-montaj.png";
const coursesData = [
  {
    id: 1,
    bgImage: DevelopCourseBg,
    title: "Dasturlash",
  },
  {
    id: 2,
    bgImage: DesignCourseBg,
    title: "Dizayn",
  },
  {
    id: 3,
    bgImage: LogisticCourseBg,
    title: "Logistika broketligi",
  },
  {
    id: 4,
    bgImage: VideoEditorCourseBg,
    title: "Videomontaj va maxsus effektlar",
  },
];
export function Courses() {
  return (
    <section className="container flex flex-col gap-y-[32px]">
      <h2 className="leading-[44px] text-[28px] text-[#0B2441] font-bold">
        Bizning maktabda o'qitiladigan xorijiy tillar
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {coursesData.map((course) => {
          const { id, bgImage, title } = course;
          return <CourseCard cardBgImage={bgImage} title={title} key={id} />;
        })}
      </div>
    </section>
  );
}
