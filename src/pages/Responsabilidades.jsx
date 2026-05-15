import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import content from '../docs/05_responsabilidades_flonic.md?raw';

export default function Responsabilidades() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6">
      <article className="max-w-4xl mx-auto">
        <div className="mb-12 pb-8 border-b border-slate-700">
          <h1 className="text-5xl font-bold text-green-400 mb-4">05 — Responsabilidades Legales de los Actores</h1>
          <p className="text-slate-400 text-lg">Análisis de responsabilidad: penal, civil, administrativa</p>
        </div>
        
        <div className="prose prose-invert prose-sm max-w-none
          prose-headings:text-green-400
          prose-headings:font-bold
          prose-h2:text-2xl
          prose-h3:text-xl
          prose-strong:text-green-300
          prose-code:bg-slate-800
          prose-code:text-green-200
          prose-code:px-2
          prose-code:py-1
          prose-code:rounded
          prose-a:text-emerald-400
          prose-a:hover:text-emerald-300
          prose-a:underline
          prose-p:leading-relaxed
          prose-p:text-slate-300
          prose-li:text-slate-300
          prose-blockquote:border-l-4
          prose-blockquote:border-green-500
          prose-blockquote:pl-4
          prose-blockquote:italic
          prose-blockquote:text-slate-400
          prose-table:border-collapse
          prose-td:border
          prose-td:border-slate-600
          prose-td:px-3
          prose-td:py-2
          prose-th:border
          prose-th:border-slate-600
          prose-th:bg-slate-800
          prose-th:px-3
          prose-th:py-2
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
