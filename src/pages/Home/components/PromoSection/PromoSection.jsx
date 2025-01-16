import StarIcon from "../../../../assets/icons/star-icon.svg";
import BgImage from "../../../../assets/images/promoSectionBg.png";
import { Button } from "../../../../components/Button/Button";
export function PromoSection() {
  return (
    <div
      className="container bg-[#EAF4FF] rounded-[44px]"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="pl-[56px] pt-[56px] pb-[64px] flex flex-col items-start gap-y-[56px]">
        <div className="flex flex-col gap-y-4 items-start">
          <span className="text-[#0b244180] flex items-center gap-x-2">
            22-IDUM <StarIcon />{" "}
          </span>

          <h1 className="text-[28px] text-[#0B2441] font-bold w-[456px]">
            Olmazor tumanidagi <span className="text-[#2189FF] ">22-sonli</span>{" "}
            ixtisoslashtirilgan davlat umumta'lim maktabi rasmiy veb saytiga
            xush kelibsiz
          </h1>
        </div>
        <Button
          title="Batafsil"
          btnClass="py-4 px-9 rounded-[20px] bg-[#2189FF] text-[#FFF] hover:bg-blue-700 transition"
          titleClass="text-base font-medium"
        />
      </div>
    </div>
  );
}
