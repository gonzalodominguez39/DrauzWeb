// Datos de contacto y ubicaciones
export interface ContactLocation {
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  hours: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
}

// Ubicaciones principales (con coordenadas aleatorias dentro de rangos realistas)
export const contactLocations: ContactLocation[] = [
  {
    name: "Oficina Principal",
    address: "Carrera 7 #45-23",
    city: "Bogotá",
    country: "Colombia",
    phone: "+57 (1) 1234-5678",
    email: "principal@drauz.com",
    latitude: 4.7110,
    longitude: -74.0055,
    hours: "Lunes - Viernes: 9:00 AM - 6:00 PM",
  },
  {
    name: "Sucursal Medellín",
    address: "Calle 50 #42-90",
    city: "Medellín",
    country: "Colombia",
    phone: "+57 (4) 4567-8901",
    email: "medellin@drauz.com",
    latitude: 6.2442,
    longitude: -75.5812,
    hours: "Lunes - Viernes: 10:00 AM - 5:00 PM",
  },
  {
    name: "Sucursal Cali",
    address: "Avenida 6 #55-100",
    city: "Cali",
    country: "Colombia",
    phone: "+57 (2) 6789-0123",
    email: "cali@drauz.com",
    latitude: 3.4516,
    longitude: -76.5319,
    hours: "Lunes - Viernes: 9:00 AM - 5:30 PM",
  },
];

// Información general de contacto
export const generalContactInfo: ContactInfo = {
  phone: "+57 (1) 1234-5678",
  email: "info@drauz.com",
  website: "www.drauz.com",
};

// Preguntas frecuentes
export const faqData = [
  {
    question: "¿Cuál es el horario de atención?",
    answer:
      "Atendemos de lunes a viernes de 9:00 AM a 6:00 PM. Los sábados ofrecemos atención limitada de 10:00 AM a 2:00 PM.",
  },
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Puedes agendar una cita directamente en nuestra plataforma, por teléfono o visitando una de nuestras oficinas.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos todas las formas de pago: tarjetas de crédito/débito, transferencias bancarias y efectivo.",
  },
  {
    question: "¿Ofrecen asesoría gratuita?",
    answer:
      "Sí, ofrecemos una consulta inicial gratuita de 30 minutos con nuestros asesores especializados.",
  },
];
