import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, UserCheck, Shield, Calculator } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Responsabilidad Estatal",
      description: "Asistencia personalizada ante las organizaciones municipales y departamentales que realizan inspección, vigilancia y control en clínicas veterinarias."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Gestión Humana",
      description: "Asesoría y acompañamiento integral en la gestión del talento humano, incluyendo la elaboración de contratos laborales y el cumplimiento en seguridad y salud en el trabajo, especialmente enfocado en clínicas veterinarias."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Seguridad Social",
      description: "Gestion personalizada con las entidades de seguridad social y parafiscales, garantizando el cumplimiento de las obligaciones legales."
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Nómina Laboral",
      description: "Manejo de planilla de nomina laboral y liquidación de aportes y prestaciones sociales para empleados de la clínica veterinaria."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Libérate de preocupaciones administrativas. Nosotros gestionamos los procesos y el cumplimiento, tú enfócate en tu clínica y tus pacientes.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;