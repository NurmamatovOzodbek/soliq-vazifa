import { Button } from "../Button/Button";
import ArrowRightIcon from "../../assets/icons/arrow-right-icon.svg";
import DasturlashBg from "../../assets/images/dasturlash.png";

export function CourseCard({ cardBgImage, title, link }) {
  return (
    <div
      className="pl-[32px] pb-[32px] h-[300px] flex items-end rounded-[44px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${cardBgImage})`,
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-y-[20px] items-start">
        <strong className="text-white font-bold text-2xl">{title}</strong>
        <Button
          title="Batafsil"
          icon={<ArrowRightIcon />}
          titleClass="text-white font-medium text-base"
          btnClass="bg-[#2189FF] py-[10px] px-6 rounded-[12px] flex items-center gap-x-2"
        />
      </div>
    </div>
  );
}
