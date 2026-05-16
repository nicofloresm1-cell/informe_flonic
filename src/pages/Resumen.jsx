import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import content from '../docs/01_resumen_flonic.md?raw';

const markdownComponents = {
  h1: ({ node, ...props }) => (
    <h1
      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 mt-12 mb-8 leading-tight break-words"
      {...props}
    />
  ),

  h2: ({ node, ...props }) => (
    <h2
      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300 mt-10 mb-6 leading-tight break-words"
      {...props}
    />
  ),

  h3: ({ node, ...props }) => (
    <h3
      className="text-xl sm:text-2xl font-bold text-amber-200 mt-8 mb-4 leading-tight break-words"
      {...props}
    />
  ),

  p: ({ node, ...props }) => (
    <p
      className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 break-words whitespace-pre-wrap"
      {...props}
    />
  ),

  strong: ({ node, ...props }) => (
    <strong
      className="text-amber-300 font-semibold"
      {...props}
    />
  ),

  em: ({ node, ...props }) => (
    <em
      className="text-slate-400 italic"
      {...props}
    />
  ),

  code: ({ inline, node, ...props }) =>
    inline ? (
      <code
        className="bg-slate-800 text-amber-200 px-2 py-1 rounded text-sm font-mono break-words"
        {...props}
      />
    ) : (
      <code
        className="text-slate-200 font-mono text-sm sm:text-base"
        {...props}
      />
    ),

  pre: ({ node, ...props }) => (
    <pre
      className="bg-slate-900 border border-slate-700 p-5 rounded-xl mb-6 overflow-x-auto w-full"
      {...props}
    />
  ),

  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-amber-500 pl-5 italic text-slate-400 my-6"
      {...props}
    />
  ),

  a: ({ node, ...props }) => (
    <a
      className="text-yellow-400 hover:text-yellow-300 underline break-all"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  ul: ({ node, ...props }) => (
    <ul
      className="list-disc pl-6 text-slate-300 mb-6 space-y-3 text-base sm:text-lg"
      {...props}
    />
  ),

  ol: ({ node, ...props }) => (
    <ol
      className="list-decimal pl-6 text-slate-300 mb-6 space-y-3 text-base sm:text-lg"
      {...props}
    />
  ),

  li: ({ node, ...props }) => (
    <li
      className="leading-relaxed break-words"
      {...props}
    />
  ),

  table: ({ node, ...props }) => (
    <div className="w-full overflow-x-auto my-8">
      <table
        className="w-full min-w-[700px] border-collapse"
        {...props}
      />
    </div>
  ),

  thead: ({ node, ...props }) => (
    <thead
      className="bg-slate-800"
      {...props}
    />
  ),

  tbody: ({ node, ...props }) => (
    <tbody {...props} />
  ),

  tr: ({ node, ...props }) => (
    <tr
      className="border-b border-slate-700"
      {...props}
    />
  ),

  th: ({ node, ...props }) => (
    <th
      className="border border-slate-700 bg-slate-800 px-4 py-3 text-left text-amber-300 font-semibold text-sm sm:text-base"
      {...props}
    />
  ),

  td: ({ node, ...props }) => (
    <td
      className="border border-slate-700 px-4 py-3 text-slate-300 text-sm sm:text-base align-top break-words"
      {...props}
    />
  ),

  hr: ({ node, ...props }) => (
    <hr
      className="border-t border-slate-700 my-10"
      {...props}
    />
  ),
};

export default function Resumen() {
  return (
    <article className="w-full max-w-none min-w-0">
      <div className="w-full max-w-none break-words overflow-x-hidden">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}