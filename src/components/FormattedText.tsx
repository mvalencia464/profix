import { Link } from 'react-router-dom';

// Lightweight Markdown-style renderer for bolding and links
export default function FormattedText({ text }: { text: string }) {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

    return (
        <>
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-black text-gray-900">{part.slice(2, -2)}</strong>;
                }
                if (part.startsWith('[') && part.includes('](')) {
                    const match = part.match(/\[(.*?)\]\((.*?)\)/);
                    if (match) {
                        const [, label, url] = match;
                        const isInternal = url.startsWith('/');
                        if (isInternal) {
                            return <Link key={i} to={url} className="text-blue-600 hover:text-[#D4F427] font-bold underline transition-colors">{label}</Link>;
                        }
                        return <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-[#D4F427] font-bold underline transition-colors">{label}</a>;
                    }
                }
                return part;
            })}
        </>
    );
}
