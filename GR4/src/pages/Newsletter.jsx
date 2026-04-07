import { motion } from "framer-motion";
import { House, Newspaper, CalendarDays } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Newsletter() {
  const navItems = [
    { id: "home", label: "Home", icon: House, path: "/" },
    { id: "newsletter", label: "Newsletter", icon: Newspaper, path: "/newsletter" },
    { id: "calendar", label: "Calendar", icon: CalendarDays, path: "/calendar" },
  ];

  const articles = [
    {
      id: 1,
      date: "03/01",
      body:
        "Went on this gorgeous mountain hike today with my kids!",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      date: "03/12",
      body:
        "Loved this city trip with my friends! The view is so majestic.",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      date: "03/22",
      body:
        "This road trip was crazy long, but I'm glad I got to travel around the country!",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#2f2a26]">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 py-4 md:px-10">
        <header className="pt-1 text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-center gap-4 text-[#a9a094]">
              <span className="text-2xl">≪</span>
              <h1 className="text-xl font-semibold tracking-[0.28em] md:text-2xl">
                WONDERCAPSULE
              </h1>
              <span className="text-2xl">≫</span>
            </div>
            <h2 className="text-2xl font-medium tracking-[0.26em] md:text-4xl">
              NEWSLETTER
            </h2>
          </motion.div>
        </header>

        <main className="flex-1 py-5">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
            {articles.map((article, index) => {
              const imageOnRight = index % 2 === 1;

              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, x: imageOnRight ? 18 : -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="rounded-[30px] border border-[#ddd5ca] bg-white/90 p-4 shadow-[0_12px_40px_rgba(55,40,25,0.06)] md:h-[330px] md:p-5"
                >
                  <div className="flex flex-col gap-5 md:h-full md:flex-row md:items-stretch md:gap-6">
                    <div
                      className={`overflow-hidden rounded-[24px] border border-[#e1d8ce] bg-[#f3eee7] shadow-sm md:basis-[58%] ${imageOnRight ? "md:order-2" : "md:order-1"
                        }`}
                    >
                      <img
                        src={article.image}
                        alt={`Memory from ${article.date}`}
                        className="h-[220px] w-full object-cover md:h-full md:min-h-[280px]"
                      />
                    </div>

                    <div
                      className={`flex flex-col justify-center space-y-3 rounded-[22px] border border-[#e8e0d5] bg-[#fcfaf6] px-4 py-4 md:h-full md:basis-[42%] md:px-5 ${imageOnRight ? "md:order-1" : "md:order-2"
                        }`}
                    >
                      <p className="text-lg font-semibold tracking-[0.08em] text-[#3b3531] md:text-xl">
                        {article.date}
                      </p>
                      <p className="text-sm leading-7 text-[#6e655d] md:text-[15px]">
                        {article.body}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </main>

        <footer className="mt-auto pb-2 pt-2">
          <nav className="grid grid-cols-3 items-center border-t border-[#ddd5ca] pt-3 text-center">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className="flex flex-col items-center justify-center gap-2 py-2 text-base uppercase tracking-[0.22em] text-[#5a534d]"
                >
                  {({ isActive }) => (
                    <>
                      <Icon className="h-5 w-5" />
                      {isActive ? (
                        <span className="rounded-md border border-[#bdb3a8] bg-white px-4 py-1 shadow-sm">
                          {item.label}
                        </span>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </footer>
      </div>
    </div>
  );
}
