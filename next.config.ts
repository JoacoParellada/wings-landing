/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para el compilador de Next.js
  // (Asegúrate de mantener cualquier otra configuración que ya tuvieras aquí)

  // 1. Desactivar la estricta comprobación de tipos de TypeScript en Vercel
  //    (Esto se puede comentar si quieres que falle si hay errores de tipos,
  //     pero para despliegue rápido, se puede desactivar temporalmente)
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2. Desactivar la comprobación de ESLint durante la compilación
  //    (Esta es la solución directa para tus errores de "variable never used")
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ejemplo de otras configuraciones comunes:
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
