// components/SearchFilters.tsx

"use client";

import React from "react";

interface SearchFiltersProps {
  filterTopic: string | null;
  setFilterTopic: (value: string | null) => void;
  filterOutcome: string | null;
  setFilterOutcome: (value: string | null) => void;
  sortOrder: "relevance" | "date" | "popularity";
  setSortOrder: (value: "relevance" | "date" | "popularity") => void;
}

export default function SearchFilters({
  filterTopic,
  setFilterTopic,
  filterOutcome,
  setFilterOutcome,
  sortOrder,
  setSortOrder,
}: SearchFiltersProps) {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md space-y-4">
      {/* Filtre par Thème */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Thème</label>
        <select
          value={filterTopic ?? ""}
          onChange={(e) => setFilterTopic(e.target.value || null)}
          className="border p-2 rounded"
        >
          <option value="">Tous les thèmes</option>
          <option value="Pénal">Droit Pénal</option>
          <option value="Commercial">Droit Commercial</option>
          <option value="Civil">Droit Civil</option>
          {/* Ajoute d'autres thèmes si besoin */}
        </select>
      </div>

      {/* Filtre par Décision */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Type de Décision</label>
        <select
          value={filterOutcome ?? ""}
          onChange={(e) => setFilterOutcome(e.target.value || null)}
          className="border p-2 rounded"
        >
          <option value="">Tous les types</option>
          <option value="Acquittement">Acquittement</option>
          <option value="Condamnation">Condamnation</option>
          <option value="Appel rejeté">Appel rejeté</option>
          {/* Autres décisions possibles */}
        </select>
      </div>

      {/* Tri */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Trier par</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as any)}
          className="border p-2 rounded"
        >
          <option value="relevance">Pertinence</option>
          <option value="date">Date (récent → ancien)</option>
          <option value="popularity">Popularité</option>
        </select>
      </div>
    </div>
  );
}
