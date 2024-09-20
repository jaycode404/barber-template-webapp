import React from "react";
import Testimoniales from "./Testimoniales";
import Imagenes from "./Imagenes";
import ServiciosLanding from "./ServiciosLanding";
export default function Nosotros() {
  return (
    <section className="nosotros-container">
      <h2>NOSOTROS</h2>
      {/* poner un liston de medalla amarillo como senal de certificado */}
      <p>
        En Barbería [Nombre], nos especializamos en cortes de alta precisión,
        afeitados a navaja y arreglos de barba, todo en un ambiente moderno y
        relajado. Nuestros servicios premium incluyen tratamientos capilares
        exclusivos, masajes faciales y diseños personalizados de barba,
        utilizando productos de la más alta calidad para que salgas siempre
        luciendo impecable.
      </p>
      <ServiciosLanding/>
      <Testimoniales />
      <p>
      En nuestra barbería premium, cada cliente es tratado con el máximo cuidado y atención. Desde el momento en que cruzas la puerta, te sumerges en un ambiente de lujo y sofisticación. Nuestros profesionales altamente capacitados ofrecen servicios personalizados que van más allá de un simple corte de cabello.
      </p>
      <Imagenes />
    </section>
  );
}
