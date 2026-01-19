import { FaHome, FaMoneyBillWave, FaKey, FaChartBar, FaShieldAlt, FaHandshake } from 'react-icons/fa';

export const aboutData = {
  company: {
    title: "Sobre Drauz",
    description: "Somos una plataforma inmobiliaria innovadora dedicada a transformar la forma en que las personas compran, venden y alquilan propiedades. Con tecnología de punta y un equipo apasionado, conectamos compradores y vendedores de manera transparente y eficiente.",
    vision: "Ser la plataforma inmobiliaria más confiable y accesible de Latinoamérica, democratizando el acceso al mercado de propiedades.",
    mission: "Facilitar transacciones inmobiliarias seguras y transparentes, utilizando tecnología para eliminar intermediarios innecesarios y reducir costos."
  },
  
  services: [
    {
      icon: FaHome,
      title: "Compra de Propiedades",
      description: "Acceso a miles de propiedades verificadas con información detallada, fotos, videos y tours virtuales para encontrar tu hogar ideal."
    },
    {
      icon: FaMoneyBillWave,
      title: "Venta de Propiedades",
      description: "Herramientas profesionales para publicar y promocionar tu propiedad. Conecta con compradores calificados en toda la región."
    },
    {
      icon: FaKey,
      title: "Alquileres",
      description: "Encuentra o publica propiedades en alquiler. Gestiona contratos, pagos y documentación de forma segura y digital."
    },
    {
      icon: FaChartBar,
      title: "Análisis de Mercado",
      description: "Accede a datos actualizados sobre precios, tendencias y oportunidades de inversión inmobiliaria en tu zona."
    },
    {
      icon: FaShieldAlt,
      title: "Transacciones Seguras",
      description: "Plataforma segura con verificación de usuarios, depósito en garantía y respaldo legal en cada transacción."
    },
    {
      icon: FaHandshake,
      title: "Asesoramiento Personalizado",
      description: "Nuestro equipo de expertos está disponible para guiarte en cada paso del proceso de compra, venta o alquiler."
    }
  ],

  team: [
    {
      id: 1,
      name: "Gonzalo Dominguez",
      role: "Fundador & CEO",
      bio: "Emprendedor con 10+ años de experiencia en tecnología e inmuebles. Visionario detrás de Drauz.",
      image: "/svg/team-gonzalo.svg",
      expertise: ["Estrategia", "Producto", "Negocio"]
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      role: "CTO & Lead Developer",
      bio: "Desarrolladora full-stack especializada en aplicaciones web modernas. Lidera el equipo técnico.",
      image: "/svg/team-emma.svg",
      expertise: ["Next.js", "TypeScript", "Cloud"]
    },
    {
      id: 3,
      name: "Carlos Martinez",
      role: "Product Manager",
      bio: "Especialista en UX/UI con experiencia en startups. Asegura que nuestro producto sea intuitivo y poderoso.",
      image: "/svg/team-carlos.svg",
      expertise: ["Diseño", "UX", "Producto"]
    },
    {
      id: 4,
      name: "Sofia Perez",
      role: "Head of Sales",
      bio: "Ejecutiva de ventas con track record probado. Construye relaciones estratégicas con partners.",
      image: "/svg/team-sofia.svg",
      expertise: ["Ventas", "Negociación", "Asociaciones"]
    },
    {
      id: 5,
      name: "Luis Garcia",
      role: "Operations Lead",
      bio: "Especialista en optimización de procesos. Garantiza que todo funcione sin problemas.",
      image: "/svg/team-luis.svg",
      expertise: ["Operaciones", "Logística", "Calidad"]
    },
    {
      id: 6,
      name: "Ana Lopez",
      role: "Customer Success Manager",
      bio: "Dedicada a la satisfacción del cliente. Primera línea de soporte y mejora continua.",
      image: "/svg/team-ana.svg",
      expertise: ["Atención al Cliente", "Soporte", "Feedback"]
    }
  ],

  values: [
    {
      title: "Transparencia",
      description: "Creemos en la honestidad y claridad en cada transacción."
    },
    {
      title: "Innovación",
      description: "Constantemente buscamos nuevas formas de mejorar la experiencia del usuario."
    },
    {
      title: "Confiabilidad",
      description: "La seguridad y protección de nuestros usuarios es nuestra prioridad."
    },
    {
      title: "Inclusión",
      description: "Hacemos que el mercado inmobiliario sea accesible para todos."
    }
  ]
};
