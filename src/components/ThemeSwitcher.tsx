"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Evitar error de hidratación
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute top-6 right-6 flex items-center space-x-3 z-50">
      <button
        onClick={() => setTheme("blue-subtle")}
        aria-label="Azul Sutil"
        className={`w-6 h-6 rounded-full border shadow-sm transition-all ${theme === 'blue-subtle' ? 'border-primary scale-110 ring-2 ring-primary/40' : 'border-gray-700 hover:scale-105'}`}
        style={{ backgroundColor: '#004c99' }}
        title="Humo Azul: Sutil"
      />
      <button
        onClick={() => setTheme("blue-standard")}
        aria-label="Azul Estándar"
        className={`w-6 h-6 rounded-full border shadow-sm transition-all ${theme === 'blue-standard' ? 'border-primary scale-110 ring-2 ring-primary/40' : 'border-gray-700 hover:scale-105'}`}
        style={{ backgroundColor: '#0071e3' }}
        title="Humo Azul: Estándar"
      />
      <button
        onClick={() => setTheme("blue-intense")}
        aria-label="Azul Intenso"
        className={`w-6 h-6 rounded-full border shadow-sm transition-all ${theme === 'blue-intense' ? 'border-primary scale-110 ring-2 ring-primary/40' : 'border-gray-700 hover:scale-105'}`}
        style={{ backgroundColor: '#3399ff' }}
        title="Humo Azul: Intenso"
      />
    </div>
  );
}
