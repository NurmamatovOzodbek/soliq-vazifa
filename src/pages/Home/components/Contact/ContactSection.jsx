export function ContactSection() {
  return (
    <section className="container bg-[#EAF4FF] rounded-[40px] ">
      <div className="py-16 px-14 flex justify-between">
        <div className="flex flex-col gap-y-4 items-start w-[350px]">
          <h2 className="text-2xl text-[#0B2441] font-bold">
            Biz bilan bog'lanish
          </h2>
          <p className="text-base font-medium text-[#0B2441]">
            Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz,
            raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-y-12 w-[600px] items-start"
        >
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between gap-x-6">
              <input
                type="text"
                placeholder="Ismingiz"
                name="firstName"
                className="w-full px-6 py-5 rounded-[20px] bg-white border border-[rgba(33, 137, 255, 0.40)] outline-none font-semibold"
              />
              <input
                type="tell"
                placeholder="Telefon raqamingiz"
                name="phone"
                className="w-full px-6 py-5 rounded-[20px] bg-white border border-[rgba(33, 137, 255, 0.40)] outline-none font-semibold"
              />
            </div>
            <input
              type="email"
              placeholder="Elektron pochtangiz"
              name="email"
              className="w-full px-6 py-5 rounded-[20px] bg-white border border-[rgba(33, 137, 255, 0.40)] outline-none font-semibold"
            />
          </div>
          <button
            type="submit"
            className="px-9 py-4 bg-[#2189FF] rounded-[20px] text-white hover:bg-blue-700 transition"
          >
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
}
