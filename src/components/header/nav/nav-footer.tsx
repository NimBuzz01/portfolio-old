import { motion } from "framer-motion";

const links = [
  {
    title: "Github",
    href: "https://github.com/NimBuzz01",
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/niamatm/",
  },
];

export default function NavFooter() {
  return (
    <div className="flex w-full justify-center text-[12px] gap-12">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.25 }}
        >
          {link.title}
        </motion.a>
      ))}
    </div>
  );
}
