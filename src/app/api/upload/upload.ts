// pages/api/upload.ts

import { NextApiRequest, NextApiResponse } from "next";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import { pinecone } from "../../../lib/pinecone"; // Adjusted path to match the actual file structure
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Erreur parsing form", err);
      return res.status(500).end();
    }

    const file = files.file?.[0];

    if (!file) return res.status(400).json({ error: "Aucun fichier reçu" });

    try {
      const data = fs.readFileSync(file.filepath);
      let text = "";

      if (file.mimetype === "application/pdf") {
        const pdfData = await pdfParse(data);
        text = pdfData.text;
      } else if (
        file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const result = await mammoth.extractRawText({ buffer: data });
        text = result.value;
      } else {
        return res.status(400).json({ error: "Format non supporté" });
      }

      // Indexer dans Pinecone
      const vector = await embedText(text); // suppose que tu as une fonction pour embeder
      await pinecone.upsert({
        vectors: [
          {
            id: generateId(), // générer un ID unique
            values: vector,
            metadata: {
              source: file.originalFilename,
            },
          },
        ],
      });

      res.status(200).json({ message: "Document indexé avec succès" });
    } catch (error) {
      console.error("Erreur traitement fichier", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });
}

// Helpers :

async function embedText(text: string): Promise<number[]> {
  // Appeler ton modèle d'embedding ici (ex: OpenAI embeddings)
  // Retourne un tableau de nombres
  return new Array(1024).fill(0); // <-- fake, à remplacer par ton vrai embedding
}

function generateId() {
  return Math.random().toString(36).substring(2, 15);
}
