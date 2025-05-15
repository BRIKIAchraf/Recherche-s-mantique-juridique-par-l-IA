# Legal Case Semantic Search App

---

## Project Overview

This project demonstrates how to build a powerful **legal case semantic search application** using:

- **Next.js** for full-stack React development
- **Pinecone** as a vector database for semantic search
- **LangChain** to parse, chunk, and process PDF legal documents
- **Voyage Embeddings** to create domain-specific embeddings for legal texts
- **TailwindCSS** for responsive UI design
- **Node.js 20+** for server-side processing

Users can upload and search through legal cases stored as PDFs with natural language queries, enabling efficient retrieval of relevant legal information from large document sets.

---

## Key Features

- Programmatic bootstrapping of knowledge bases from PDF documents
- Semantic search optimized for legal text retrieval
- Real-time dynamic suggested search interface
- Automated index creation, embedding, and management for easy onboarding
- Responsive UI using TailwindCSS

---

## Tech Stack

| Technology        | Website                    |
| ----------------- | -------------------------- |
| Next.js           | https://nextjs.org/        |
| Pinecone          | https://app.pinecone.io/   |
| LangChain         | https://www.langchain.com/ |
| Voyage Embeddings | https://dash.voyageai.com/ |
| TailwindCSS       | https://tailwindcss.com/   |
| Node.js (20+)     | https://nodejs.org/en/     |

---

## Getting Started

### Prerequisites

- Node.js 20 or higher
- Pinecone API key
- Voyage AI API key
- Environment configured for Next.js development

### Installation

```bash
git clone https://github.com/BRIKIAchraf/Recherche-s-mantique-juridique-par-l-IA.git
cd legal-case-semantic-search
npm install
```

### Environment Variables

Create a `.env` file with the following variables:

```env
NEXT_PUBLIC_PINECONE_API_KEY=your_pinecone_api_key
NEXT_PUBLIC_VOYAGE_API_KEY=your_voyage_api_key
NEXT_PUBLIC_PINECONE_ENVIRONMENT=your_pinecone_environment
DATABASE_URL=your_database_connection_string
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Project Structure

- `/app` - Next.js pages, API routes, and components
- `/lib` - Helpers for LangChain, Pinecone, and embeddings integration
- `/components` - UI components styled with TailwindCSS
- `/prisma` - Database schema and migrations (if applicable)

---

## Features Breakdown & Video Timestamps

| Timestamp | Feature Description                                        |
| --------- | ---------------------------------------------------------- |
| 00:00:00  | Introduction                                               |
| 00:00:49  | Pinecone Overview                                          |
| 00:05:43  | Starter File Setup                                         |
| 00:06:54  | Application Overview                                       |
| 00:09:39  | Bootstrapping Knowledge Base                               |
| 00:22:05  | Pinecone API Key Setup                                     |
| 00:23:26  | Bootstrap + Ingest + Embedding + Search API Implementation |
| 00:50:11  | Home Page Development                                      |
| 01:02:50  | Testing & Conclusion                                       |

---

## References and Resources

- Pinecone Docs: https://docs.pinecone.io/
- Voyage AI Dashboard: https://dash.voyageai.com/
- LangChain Docs: https://www.langchain.com/
- Next.js Docs: https://nextjs.org/
- TailwindCSS Docs: https://tailwindcss.com/

---

## Contact & Social

For business inquiries: ashraf_breki@yahoo.com

---

## License

MIT © 2025 Achraf Briki

---

_Subscribe or I turn your VS Code into light mode 😜_
