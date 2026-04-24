"use client";

import { useState } from "react";
import Image from "next/image";
import { Wallet, Landmark, HeadphonesIcon, ArrowLeft, ExternalLink, QrCode } from "lucide-react";

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

const OPTIONS: OptionType[] = [
  {
    id: "wallets",
    title: "Billeteras Digitales",
    icon: Wallet,
    description: "Nequi, Daviplata, etc.",
    actionType: "qr",
    qrImageSrc: "/Nequi_Alejo.png",
    accountInfo: "Nequi: 3144357839",
  },
  {
    id: "banks",
    title: "Bancos",
    icon: Landmark,
    description: "Transferencias bancarias",
    actionType: "qr",
    qrImageSrc: "/bancolombia_Alejo.png",
    accountInfo: "Bancolombia: Luis Huertas",
  },
  {
    id: "helpdesk",
    title: "Mesa de Ayuda",
    icon: HeadphonesIcon,
    description: "Ingreso de equipos y soporte técnico",
    actionType: "both",
    qrImageSrc: "/ClienteForm_Alejo.png",
    url: "https://script.google.com/macros/s/AKfycbxVHI0Tl-Wl4edJqPrl9uKyhavvmxxRm4dv8Xj8ClaRggNCDHpznFbzwvBqt-_R-vB3iA/exec?page=cliente",
  },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <main 
      className="min-h-screen bg-background text-foreground transition-colors duration-500 relative p-6 md:p-12 lg:p-24 flex flex-col items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: 'radial-gradient(circle at 50% -20%, var(--smoke-color), transparent 52%)',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover' 
      } as React.CSSProperties}
    >
      <div className="w-full max-w-4xl mx-auto space-y-12 z-10 relative">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-primary">
            TheMacSide
            <span className="block text-xl md:text-2xl font-medium text-muted-foreground mt-3 tracking-normal">
              Centro de Ingreso y Pagos
            </span>
          </h1>
        </header>

        {/* View Transition: Main Menu or Detail */}
        {!selectedOption ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-300">
            {OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option)}
                className="group relative flex flex-col items-center p-8 space-y-4 bg-card hover:bg-secondary border border-border rounded-3xl transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 neon-card"
              >
                <div className="p-4 bg-background rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <option.icon size={48} strokeWidth={1.5} />
                </div>
                <div className="text-center space-y-1">
                  <h2 className="text-xl font-bold text-card-foreground">{option.title}</h2>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-300 w-full max-w-md mx-auto">
            <button
              onClick={() => setSelectedOption(null)}
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2" size={16} />
              Volver al Menú Principal
            </button>

            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center space-y-8 text-center transition-all duration-500 neon-card">
              <div className="p-4 bg-secondary rounded-2xl">
                <selectedOption.icon size={40} className="text-primary" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-card-foreground">{selectedOption.title}</h2>
                <p className="text-muted-foreground">{selectedOption.description}</p>
              </div>

              {(selectedOption.actionType === "qr" || selectedOption.actionType === "both") && selectedOption.qrImageSrc && (
                <div className="w-full flex flex-col items-center space-y-6">
                  {/* Contenedor del QR Real */}
                  <div className="w-64 h-64 bg-white rounded-xl flex items-center justify-center p-2 border border-border shadow-inner overflow-hidden relative">
                     <Image 
                       src={selectedOption.qrImageSrc} 
                       alt={`Código QR para ${selectedOption.title}`} 
                       fill
                       className="object-contain"
                     />
                  </div>
                  
                  {selectedOption.accountInfo && (
                    <div className="w-full p-4 bg-secondary rounded-xl">
                      <p className="font-mono text-lg font-medium text-secondary-foreground tracking-wide">
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
                  className="w-full py-4 px-6 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>Abrir Formulario Web</span>
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
