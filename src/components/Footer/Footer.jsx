import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="bg-[#EAF4FF] pt-8 pb-[52px]">
      <div className="container flex flex-col gap-y-7">
        <div className="flex justify-between">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-[100px] rounded-[100%]" />
          </Link>
          <div className="flex gap-x-16">
            <address className="flex flex-col gap-y-3 not-italic w-[240px]">
              <span className="opacity-40">Manzil</span>
              <strong className="text-center text-xs font-medium">
                Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B
              </strong>
            </address>
            <div className="flex flex-col gap-y-3">
              <span className="opacity-40">Telefon raqam</span>
              <strong className="text-xs font-medium">+998 90 123 45 67</strong>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="opacity-40">Elektron pochta</span>
              <strong className="text-xs font-medium">support@maktab.uz</strong>
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 justify-between">
          <p className="text-xs w-[265px] tracking-[0.24px]">
            Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz
            orqali qiymat sotamiz.
          </p>
          <div className="flex gap-x-6">
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Telegram</Link>
            <Link to="/">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
