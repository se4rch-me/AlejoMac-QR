"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Wallet, Landmark, HeadphonesIcon, ArrowLeft, ExternalLink } from "lucide-react";

// Estructura de datos para las opciones
type OptionType = {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  actionType: "qr" | "link" | "both";
  url?: string;
  qrImageSrc?: string;
  accountInfo?: string;
};

// Determinar el basePath en tiempo de construcción para producción (GitHub Pages)
const basePath = process.env.NODE_ENV === 'production' ? '/AlejoMac-QR' : '';

const OPTIONS: OptionType[] = [
  {
    id: "wallets",
    title: "Billeteras Digitales",
    icon: Wallet,
    description: "Nequi, Daviplata, etc.",
    actionType: "qr",
    qrImageSrc: `${basePath}/Nequi_Alejo.png`,
    accountInfo: "Nequi: 3144357839",
  },
  {
    id: "banks",
    title: "Bancos",
    icon: Landmark,
    description: "Transferencias bancarias",
    actionType: "qr",
    qrImageSrc: `${basePath}/bancolombia_Alejo.png`,
    accountInfo: "Bancolombia: Luis Huertas",
  },
  {
    id: "helpdesk",
    title: "Mesa de Ayuda",
    icon: HeadphonesIcon,
    description: "Ingreso de equipos y soporte técnico",
    actionType: "both",
    qrImageSrc: `${basePath}/ClienteForm_Alejo.png`,
    url: "https://script.google.com/macros/s/AKfycbxVHI0Tl-Wl4edJqPrl9uKyhavvmxxRm4dv8Xj8ClaRggNCDHpznFbzwvBqt-_R-vB3iA/exec?page=cliente",
  },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  
  // Estados para la animación Splash inicial con giro 3D
  const [showSplash, setShowSplash] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    // Fase 1: Giro a los 800ms
    const flipTimer = setTimeout(() => setFlipped(true), 800);
    // Fase 2: Fade out a los 2.8s
    const hideTimer = setTimeout(() => setHideSplash(true), 2800);
    // Fase 3: Remover del DOM a los 3.3s
    const removeTimer = setTimeout(() => setShowSplash(false), 3300);
    
    return () => { 
      clearTimeout(flipTimer);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showSplash && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${hideSplash ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-48 h-48 sm:w-64 sm:h-64 [perspective:1000px]" style={{ perspective: '1000px' }}>
            <div 
              className={`w-full h-full relative transition-transform duration-[1200ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] [transform-style:preserve-3d]`}
              style={{ 
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              } as React.CSSProperties}
            >
              
              {/* Cara Frontal: La Luna */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-full shadow-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${basePath}/moon.png`} alt="Luna" className="w-full h-full object-contain p-2" loading="eager" decoding="sync" />
              </div>

              {/* Cara Trasera: Logo Apple */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-full bg-card shadow-[0_0_50px_rgba(0,113,227,0.8)] border-2 border-primary"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' } as React.CSSProperties}
              >
                <svg viewBox="0 0 384 512" className="w-20 h-20 sm:w-28 sm:h-28 text-primary drop-shadow-[0_0_15px_rgba(0,113,227,1)]" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      <main 
      className="min-h-screen bg-background text-foreground smooth-transition relative p-6 md:p-8 lg:p-16 flex flex-col items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: 'radial-gradient(circle at 50% -20%, var(--smoke-color), transparent 60%)',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      } as React.CSSProperties}
    >
      <div className="w-full max-w-4xl mx-auto space-y-16 z-10 relative">
        <header className="text-center space-y-8">
          {/* Apple Logo SVG */}
          <div className="flex justify-center mb-4 group">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="smooth-transition group-hover:scale-110 group-hover:drop-shadow-lg"
            >
              <path
                d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.12-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.3-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.48-2.54 3.2l-.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                fill="currentColor"
                className="text-primary group-hover:text-primary"
              />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary">
            TheMacSide
            <span className="block text-lg md:text-xl font-light text-muted-foreground mt-2 tracking-normal opacity-90">
              Centro de Ingreso y Pagos
            </span>
          </h1>
        </header>

        {/* View Transition: Main Menu or Detail */}
        {!selectedOption ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in zoom-in duration-300">
            {OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option)}
                className="group relative flex flex-col items-center p-8 space-y-4 rounded-2xl smooth-transition focus-ring glass-card hover:shadow-lg"
              >
                <div className="p-3 bg-background rounded-xl group-hover:bg-primary group-hover:text-primary-foreground smooth-transition">
                  <option.icon size={52} strokeWidth={1.3} />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-lg font-semibold text-card-foreground">{option.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{option.description}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-300 w-full max-w-md mx-auto">
            <button
              onClick={() => setSelectedOption(null)}
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 smooth-transition"
            >
              <ArrowLeft className="mr-2" size={18} strokeWidth={1.5} />
              Volver al Menú Principal
            </button>

            <div className="rounded-2xl p-10 flex flex-col items-center space-y-10 text-center smooth-transition glass-card">
              <div className="p-3 bg-secondary rounded-xl">
                <selectedOption.icon size={44} strokeWidth={1.5} className="text-primary" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-card-foreground">{selectedOption.title}</h2>
                <p className="text-muted-foreground text-base leading-relaxed">{selectedOption.description}</p>
              </div>

              {(selectedOption.actionType === "qr" || selectedOption.actionType === "both") && selectedOption.qrImageSrc && (
                <div className="w-full flex flex-col items-center space-y-8">
                  {/* Contenedor del QR Real */}
                  <div className="w-72 h-72 bg-white rounded-xl flex items-center justify-center p-3 border border-border shadow-2xl overflow-hidden relative">
                     <Image 
                       src={selectedOption.qrImageSrc} 
                       alt={`Código QR para ${selectedOption.title}`} 
                       fill
                       className="object-contain"
                     />
                  </div>
                  
                  {selectedOption.accountInfo && (
                    <div className="w-full p-5 bg-secondary rounded-xl border border-border/50">
                      <p className="font-mono text-base font-medium text-secondary-foreground tracking-wider">
                        {selectedOption.accountInfo}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {(selectedOption.actionType === "link" || selectedOption.actionType === "both") && selectedOption.url && (
                <a
                  href={selectedOption.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center space-x-3 hover:shadow-lg hover:bg-opacity-95 smooth-transition focus-ring"
                >
                  <span>Abrir Formulario Web</span>
                  <ExternalLink size={20} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
    </>
  );
}
