import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import content from '../docs/03_delitos_flonic.md?raw';

const markdownComponents = {
  h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-red-400 mt-6 mb-4" {...props} />,
  h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-red-300 mt-5 mb-3" {...props} />,
  h3: ({node, ...props}) => <h3 className="text-xl font-bold text-red-200 mt-4 mb-2" {...props} />,
  p: ({node, ...props}) => <p className="text-slate-300 leading-relaxed mb-4" {...props} />,
  strong: ({node, ...props}) => <strong className="text-red-300 font-semibold" {...props} />,
  em: ({node, ...props}) => <em className="text-slate-400 italic" {...props} />,
  code: ({node, ...props}) => <code className="bg-slate-800 text-red-200 px-2 py-1 rounded text-sm font-mono" {...props} />,
  pre: ({node, ...props}) => <pre className="bg-slate-800 p-4 rounded mb-4 overflow-x-auto" {...props} />,
  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-red-500 pl-4 italic text-slate-400 my-4" {...props} />,
  a: ({node, ...props}) => <a className="text-orange-400 hover:text-orange-300 underline" {...props} />,
  ul: ({node, ...props}) => <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1" {...props} />,
  ol: ({node, ...props}) => <ol className="list-decimal list-inside text-slate-300 mb-4 space-y-1" {...props} />,
  li: ({node, ...props}) => <li className="text-slate-300" {...props} />,
  table: ({node, ...props}) => <table className="w-full border-collapse my-4 text-sm" {...props} />,
  thead: ({node, ...props}) => <thead className="bg-slate-800" {...props} />,
  tbody: ({node, ...props}) => <tbody {...props} />,
  tr: ({node, ...props}) => <tr className="border-b border-slate-700" {...props} />,
  th: ({node, ...props}) => <th className="border border-slate-700 bg-slate-800 px-3 py-2 text-left text-red-300 font-semibold" {...props} />,
  td: ({node, ...props}) => <td className="border border-slate-700 px-3 py-2 text-slate-300" {...props} />,
  hr: ({node, ...props}) => <hr className="border-t border-slate-700 my-6" {...props} />,
};

export default function Delitos() {
  return (
    <article className="space-y-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
