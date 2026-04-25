"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Palette } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Evitar error de hidratación
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themes = [
    { id: "blue-subtle", label: "Sutil", color: "#004c99" },
    { id: "blue-standard", label: "Estándar", color: "#0071e3" },
    { id: "blue-intense", label: "Intenso", color: "#3399ff" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="flex flex-col items-end gap-3">
        {/* Selector de temas */}
        <div className="glass-card p-4 rounded-2xl flex gap-3">
          <div className="flex items-center gap-2 pr-3 border-r border-border/30">
            <Palette size={16} className="text-muted-foreground" strokeWidth={1.5} />
            <span className="text-xs font-medium text-muted-foreground">Tema</span>
          </div>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              aria-label={t.label}
              title={`Tema: ${t.label}`}
              className={`w-6 h-6 rounded-full smooth-transition shadow-sm border-2 ${
                theme === t.id
                  ? "border-primary scale-110 shadow-lg ring-2 ring-primary/30"
                  : "border-border hover:scale-110 hover:border-primary/50"
              }`}
              style={{ backgroundColor: t.color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
