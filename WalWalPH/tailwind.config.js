const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      drawer: {
        defaultProps: {
          size: 500,
          overlay: true,
          placement: "left",
          overlayProps: undefined,
          className: "",
          dismiss: undefined,
          onClose: undefined,
          transition: {
            type: "tween",
            duration: 0.3,
          },
        },
        styles: {
          base: {
            drawer: {
              position: "fixed",
              zIndex: "z-[9999]",
              pointerEvents: "pointer-events-auto",
              backgroundColor: "bg-white",
              boxSizing: "box-border",
              width: "w-400",
              boxShadow: "shadow-2xl shadow-blue-gray-900/10",
            },
            overlay: {
              position: "absolute",
              inset: "inset-0",
              width: "w-full",
              height: "h-full",
              pointerEvents: "pointer-events-auto",
              zIndex: "z-[9995]",
              backgroundColor: "bg-black",
              backgroundOpacity: "bg-opacity-60",
              backdropBlur: "backdrop-blur-sm",
            },
          },
        },
      },
    },
    
  },
  plugins: [],
}
)

const theme = {
  drawer: {
    defaultProps: {
      size: 200,
      overlay: true,
      placement: "left",
      overlayProps: undefined,
      className: "",
      dismiss: undefined,
      onClose: undefined,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    styles: {
      base: {
        drawer: {
          position: "fixed",
          zIndex: "z-[9999]",
          pointerEvents: "pointer-events-auto",
          backgroundColor: "bg-white",
          boxSizing: "box-border",
          width: "w-400",
          boxShadow: "shadow-2xl shadow-blue-gray-900/10",
        },
        overlay: {
          position: "absolute",
          inset: "inset-0",
          width: "w-full",
          height: "h-full",
          pointerEvents: "pointer-events-auto",
          zIndex: "z-[9995]",
          backgroundColor: "bg-black",
          backgroundOpacity: "bg-opacity-60",
          backdropBlur: "backdrop-blur-sm",
        },
      },
    },
  },
};