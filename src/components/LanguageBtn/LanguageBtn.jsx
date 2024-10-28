import { Button } from "../Button/Button";
import ArrowDownIcon from "../../assets/icons/arrow-down-icon.svg";
export function LanguageBtn() {
  return (
    <div>
      <Button
        title="uz"
        icon={<ArrowDownIcon />}
        titleClass="text-[#2189FF] font-semibold uppercase"
        btnClass="flex items-center gap-x-1 p-4 rounded-2xl border-[1px] border-[#EAF4FF]"
      />
    </div>
  );
}
