// components/DocumentUploader.tsx

import React, { useState } from "react";
import { cn } from "@/lib/utils"; // si tu utilises cn partout

interface DocumentUploaderProps {
  onUploadSuccess: () => void;
  onClose: () => void;
}

export default function DocumentUploader({
  onUploadSuccess,
  onClose,
}: DocumentUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        onUploadSuccess();
        onClose();
      } else {
        console.error("Erreur d'upload");
      }
    } catch (error) {
      console.error("Erreur réseau", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-2">Uploader un Document</h2>
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />
      <div className="flex gap-2">
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className={cn(
            "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
            uploading && "opacity-50 cursor-not-allowed"
          )}
        >
          {uploading ? "Uploading..." : "Uploader"}
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
