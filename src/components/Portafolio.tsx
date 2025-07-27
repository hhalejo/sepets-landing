// src/sections/Portafolio.tsx
import React from "react";

type Client = {
  name: string;
  logo?: string; // opcional si más adelante agregas logos
};

const clients: Client[] = [
  { name: "Fundación Hospital Veterinario Pereira" },
  { name: "Hospital Veterinario de Cuba" },
  { name: "Hospital Veterinario de Cartago" },
  { name: "Hospital Veterinario de Armenia" },
  { name: "Hospital Veterinario de Santa Rosa de Cabal" },
  { name: "Hospital Veterinario de Dosquebradas (Risaralda)" },
  { name: "Centro Veterinario de Dosquebradas" },
  { name: "EPS Mascotas Dosquebradas" },
  { name: "Animal Glamour - Peluquería Canina" },
];

const Portafolio: React.FC = () => {
  // Duplicamos el array para el loop infinito visual
  const loop = [...clients, ...clients];

  return (
    <section id="portafolio" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-foreground">
          Empresas con las que hemos trabajado
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradientes para desvanecer bordes */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          <div
            className="flex whitespace-nowrap animate-marquee will-change-transform"
            aria-label="Listado de clientes desplazándose"
          >
            {loop.map((c, i) => (
              <span
                key={`${c.name}-${i}`}
                className="mx-4 inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-foreground shadow-sm border"
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
