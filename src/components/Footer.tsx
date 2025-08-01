import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "Sobre Nosotros", href: "#about" },
      { name: "Nuestro Equipo", href: "#team" },
      { name: "Casos de Éxito", href: "#cases" },
      
    ],
    services: [
      { name: "Consultoría", href: "#services" },
      { name: "Capacitación", href: "#training" },
      { name: "Soporte", href: "#support" }
    ],
    legal: [
      { name: "Política de Privacidad", href: "#privacy" },
      { name: "Términos de Servicio", href: "#terms" },
      { name: "Aviso Legal", href: "#legal" },
      { name: "Cookies", href: "#cookies" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">SEPets</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Especialistas en consultoría para clínicas veterinarias. 
              Mejoramos la gestión y calidad de atención para crear experiencias excepcionales.
            </p>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">
                <strong>Email:</strong> luchinitospinh@gmail.com
              </p>
              <p className="text-primary-foreground/80">
                <strong>Teléfono:</strong> +57 3213377114
              </p>
              <p className="text-primary-foreground/80">
                <strong>WhatsApp:</strong> +57 3213377114
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © 2025 SEPets. Todos los derechos reservados.
          </p>
          <div className="flex items-center text-primary-foreground/80 text-sm">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 mx-1 text-red-400" />
            <span>para las mascotas y sus familias</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;