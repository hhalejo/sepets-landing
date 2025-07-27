import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" },
  ];

  const handleNavClick = (item: { name: string; href: string }) => {
    if (item.name === "Contacto") {
      setIsModalOpen(true);
    } else {
      window.location.hash = item.href;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="SEPets Logo" className="h-15 w-16 mr-3 rounded-full shadow-lg border-2 border-primary" />
            <span className="text-3xl font-bold text-primary tracking-tight hidden sm:block">SEPets</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="relative px-4 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-primary transition-colors duration-200 group bg-transparent border-none"
                style={{ background: "none", border: "none" }}
              >
                {item.name}
                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
                <span className="absolute right-1/2 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 group-hover:right-0"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="focus:ring-2 focus:ring-primary">
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-white shadow-lg rounded-b-xl animate-fade-in-down">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors duration-200 bg-transparent border-none"
                  style={{ background: "none", border: "none" }}
                >
                  {item.name}
                </button>
              ))}
              
            </div>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-32">
    <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl p-6">
      {/* Botón de cerrar */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-primary"
        aria-label="Cerrar"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Título */}
      <h2 className="text-2xl font-bold text-primary mb-4">Contacto</h2>

      {/* Contenido */}
      <div className="space-y-3 text-gray-700 text-sm">
        <div>
          <span className="font-semibold">Teléfono:</span>{" "}
          <a href="tel:+56912345678" className="text-primary hover:underline">
            +57 3213377114
          </a>
        </div>
        <div>
          <span className="font-semibold">WhatsApp:</span>{" "}
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            +57 3213377114
          </a>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navigation;