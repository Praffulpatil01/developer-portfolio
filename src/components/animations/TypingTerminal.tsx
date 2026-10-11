"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TerminalLine {
  text: string;
  colorClass: string;
}

function buildTerminalLines(terminal: {
  focus: string;
  philosophy: string;
  location: string;
  status: string;
  stack: Record<string, string[]>;
}): TerminalLine[] {
  const lines: TerminalLine[] = [];

  lines.push({ text: "{", colorClass: "text-on-surface-variant/40" });

  const simpleFields = [
    { key: "focus", value: terminal.focus },
    { key: "philosophy", value: terminal.philosophy },
    { key: "location", value: terminal.location },
  ];

  for (const field of simpleFields) {
    lines.push({
      text: `  "${field.key}": "${field.value}",`,
      colorClass: "mixed",
    });
  }

  lines.push({
    text: `  "status": "${terminal.status}",`,
    colorClass: "status",
  });

  lines.push({ text: `  "stack": {`, colorClass: "mixed" });

  const stackEntries = Object.entries(terminal.stack);
  stackEntries.forEach(([key, values], idx) => {
    const valStr = (values as string[]).map((v) => `"${v}"`).join(", ");
    const comma = idx < stackEntries.length - 1 ? "," : "";
    lines.push({
      text: `    "${key}": [${valStr}]${comma}`,
      colorClass: "stack-line",
    });
  });

  lines.push({ text: "  }", colorClass: "text-on-surface-variant/40" });
  lines.push({ text: "}", colorClass: "text-on-surface-variant/40" });

  return lines;
}

function SyntaxLine({ line }: { line: TerminalLine }) {
  if (line.colorClass === "mixed") {
    const match = line.text.match(/^(\s*)"([^"]+)"(:\s*)"([^"]*)"(,?)$/);
    if (match) {
      return (
        <span>
          <span className="text-on-surface-variant/40">{match[1]}</span>
          <span className="text-primary/70">&quot;{match[2]}&quot;</span>
          <span className="text-on-surface-variant/40">{match[3]}</span>
          <span className="text-secondary">&quot;{match[4]}&quot;</span>
          <span className="text-on-surface-variant/40">{match[5]}</span>
        </span>
      );
    }
    const matchObj = line.text.match(/^(\s*)"([^"]+)"(:\s*\{)$/);
    if (matchObj) {
      return (
        <span>
          <span className="text-on-surface-variant/40">{matchObj[1]}</span>
          <span className="text-primary/70">&quot;{matchObj[2]}&quot;</span>
          <span className="text-on-surface-variant/40">{matchObj[3]}</span>
        </span>
      );
    }
    return <span className="text-on-surface-variant/40">{line.text}</span>;
  }

  if (line.colorClass === "status") {
    const match = line.text.match(/^(\s*)"([^"]+)"(:\s*)"([^"]*)"(,?)$/);
    if (match) {
      return (
        <span className="flex items-center gap-1.5">
          <span>
            <span className="text-on-surface-variant/40">{match[1]}</span>
            <span className="text-primary/70">&quot;{match[2]}&quot;</span>
            <span className="text-on-surface-variant/40">{match[3]}</span>
            <span className="text-emerald-400">&quot;{match[4]}&quot;</span>
            <span className="text-on-surface-variant/40">{match[5]}</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </span>
      );
    }
  }

  if (line.colorClass === "stack-line") {
    const match = line.text.match(/^(\s*)"([^"]+)"(:\s*\[)(.*?)(\])(,?)$/);
    if (match) {
      const valuesStr = match[4];
      const values = valuesStr.match(/"[^"]*"/g) || [];
      return (
        <span>
          <span className="text-on-surface-variant/40">{match[1]}</span>
          <span className="text-tertiary/80">&quot;{match[2]}&quot;</span>
          <span className="text-on-surface-variant/40">{match[3]}</span>
          {values.map((val, i) => (
            <span key={i}>
              <span className="text-secondary/80">{val}</span>
              {i < values.length - 1 && (
                <span className="text-on-surface-variant/40">, </span>
              )}
            </span>
          ))}
          <span className="text-on-surface-variant/40">
            {match[5]}
            {match[6]}
          </span>
        </span>
      );
    }
  }

  return <span className={line.colorClass}>{line.text}</span>;
}

export function TypingTerminal({
  terminal,
}: {
  terminal: {
    focus: string;
    philosophy: string;
    location: string;
    status: string;
    stack: Record<string, string[]>;
  };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const lines = buildTerminalLines(terminal);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleLines(current);
      if (current >= lines.length) {
        clearInterval(interval);
        setTimeout(() => setTypingDone(true), 200);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [isInView, lines.length]);

  return (
    <div ref={ref} className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Terminal Header Bar */}
      <div className="flex items-center justify-between px-lg py-sm bg-surface-container/60 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xs text-on-surface-variant/50">terminal</span>
          <span className="text-[12px] font-mono text-on-surface-variant/70 tracking-wide">
            prafful-patil.config
          </span>
        </div>
        <div className="w-12 text-right">
          <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded">LIVE</span>
        </div>
      </div>

      {/* Terminal Body with Typing Animation */}
      <div className="p-lg font-code-label text-[13px] leading-[1.8] min-h-[340px] bg-background/50 backdrop-blur-sm overflow-x-auto">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -6 }}
            animate={
              idx < visibleLines
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -6 }
            }
            transition={{ duration: 0.12, ease: "easeOut" }}
          >
            <SyntaxLine line={line} />
          </motion.div>
        ))}

        {/* Blinking prompt line */}
        <div className="pt-3 flex items-center gap-2">
          <span className="text-primary font-bold font-mono">&gt;</span>
          <motion.span
            className="w-2 h-4 bg-primary inline-block rounded-xs"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
