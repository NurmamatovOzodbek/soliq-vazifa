import { Button } from "../Button/Button";
import { LanguageBtn } from "../LanguageBtn/LanguageBtn";
import LogoImage from "../../assets/images/logo.png";
import BookIcon from "../../assets/icons/book-icon.svg";
import CallIcon from "../../assets/icons/call-icon.svg";
import { Links } from "../NavLink/Link";
export function Header() {
  return (
    <div className="w-full py-6">
      <header className="container flex items-start gap-x-[28px]">
        <div>
          <img src={LogoImage} alt="Farobiy IT Academy" />
        </div>
        <div className="flex items-center justify-between py-1 w-full">
          <Button
            title="Kurslar"
            icon={<BookIcon />}
            btnClass="px-7 py-4 bg-[#EAF4FF] rounded-2xl"
            titleClass="text-[#2189FF] text-xs font-semibold"
          />
          <div className="flex items-center justify-between gap-x-[46px]">
            <Links />
            <div className="flex items-center gap-x-6">
              <LanguageBtn />
              <Button
                title="+998 91 7775411"
                icon={<CallIcon />}
                btnClass="px-7 py-4 bg-[#EAF4FF] rounded-2xl flex-row-reverse"
                titleClass="text-[#2189FF] text-xs font-semibold"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
