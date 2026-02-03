

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Thimesh Madhusanka. All rights reserved.
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a href="#home" className="text-gray-400 hover:text-mint transition">
            Home
          </a>
          <a href="#stack" className="text-gray-400 hover:text-mint transition">
            Stack
          </a>
          <a href="#projects" className="text-gray-400 hover:text-mint transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 hover:text-mint transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
