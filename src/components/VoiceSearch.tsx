// components/VoiceSearch.tsx

"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // Ton utilitaire pour les classes conditionnelles

// Ajout des types manquants pour TypeScript
declare global {
  interface Window {
    webkitSpeechRecognition: typeof window.SpeechRecognition;
    SpeechRecognition: typeof window.SpeechRecognition;
  }

  interface ISpeechRecognition {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    start: () => void;
    stop: () => void;
    onresult: (event: any) => void;
    onerror: (event: any) => void;
  }

  type SpeechRecognition = ISpeechRecognition;
}

interface VoiceSearchProps {
  onResult: (query: string) => void;
}

export default function VoiceSearch({ onResult }: VoiceSearchProps) {
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );
  const [isSupported, setIsSupported] = useState(true);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      const SpeechRecognitionClass =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recog: SpeechRecognition = new SpeechRecognitionClass();
      recog.lang = "fr-FR"; // Français
      recog.continuous = false;
      recog.interimResults = false;

      recog.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        onResult(transcript);
        setToastMessage("Reconnaissance terminée : " + transcript);
        setListening(false);
      };

      recog.onerror = (event: any) => {
        console.error("Erreur Voice Recognition:", event.error);
        setToastMessage("Erreur de reconnaissance vocale");
        setListening(false);
      };

      setRecognition(recog);
    } else {
      setIsSupported(false);
      setToastMessage(
        "La reconnaissance vocale n'est pas supportée par votre navigateur."
      );
    }
  }, [onResult]);

  const toggleListening = () => {
    if (!recognition) return;

    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      recognition.start();
      setListening(true);
    }
  };

  return (
    <div className="relative">
      {/* Bouton du micro */}
      <button
        onClick={toggleListening}
        className={cn(
          "px-4 py-2 rounded-full flex items-center justify-center",
          listening ? "bg-red-600 text-white" : "bg-blue-600 text-white",
          "hover:opacity-80 transition-all duration-300"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "w-8 h-8",
            listening ? "animate-pulse" : "animate-none"
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a7 7 0 017 7v3a1 1 0 01-1 1h-2a1 1 0 01-1-1V9a5 5 0 00-10 0v4a1 1 0 01-1 1H3a1 1 0 01-1-1V10a7 7 0 017-7z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Toast Message */}
      {toastMessage && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-green-500 text-white rounded-md shadow-lg">
          {toastMessage}
        </div>
      )}

      {/* Message d'erreur si non supporté */}
      {!isSupported && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-red-600 text-white rounded-md shadow-lg">
          La reconnaissance vocale n'est pas supportée par votre navigateur.
        </div>
      )}
    </div>
  );
}
