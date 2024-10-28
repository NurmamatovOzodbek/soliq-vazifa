import { CourseCard } from "../../../../components";
import DevelopCourseBg from "../../../../assets/images/dasturlash.png";
import DesignCourseBg from "../../../../assets/images/dizayn.png";
import LogisticCourseBg from "../../../../assets/images/logistika.png";
// import MarketingCourseBg from "../../../../assets/images/marketing.png";
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
    <div className="flex flex-wrap">
      {coursesData.map((course) => {
        const { id, bgImage, title } = course;
        return 
      })}
    </div>
  );
}
