import React, { useMemo } from 'react';
import { strategyData, SEOPlanItem } from '../data/strategyData';
import { Folder, FileText, Home, ChevronRight, ChevronDown } from 'lucide-react';

interface TreeNode {
    item: SEOPlanItem;
    children: TreeNode[];
}

export function SiteStructureTree() {
    // Transform flat data into tree
    const treeData = useMemo(() => {
        const l1 = strategyData.find(i => i.type === 'L1');
        if (!l1) return null;

        const root: TreeNode = { item: l1, children: [] };

        // Find L2s
        const l2s = strategyData.filter(i => i.type === 'L2');

        l2s.forEach(l2 => {
            const l2Node: TreeNode = { item: l2, children: [] };

            // Find L3s for this L2
            // Logic: L3 URL starts with L2 URL
            const l3s = strategyData.filter(i =>
                i.type === 'L3' && i.url.startsWith(l2.url + '/')
            );

            l3s.forEach(l3 => {
                l2Node.children.push({ item: l3, children: [] });
            });

            root.children.push(l2Node);
        });

        return root;
    }, []);

    if (!treeData) return <div>No structure data found.</div>;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-xl font-bold text-gray-900">Visual Site Architecture</h2>
                <p className="text-gray-500 text-sm mt-1">Hierarchical view of the Core 30 implementation.</p>
            </div>
            <div className="p-8 overflow-x-auto">
                <div className="min-w-[800px]">
                    <TreeItem node={treeData} level={0} />
                </div>
            </div>
        </div>
    );
}

function TreeItem({ node, level }: { node: TreeNode; level: number }) {
    const [isOpen, setIsOpen] = React.useState(true);
    const hasChildren = node.children.length > 0;

    const getIcon = () => {
        if (node.item.type === 'L1') return <Home size={18} className="text-blue-600" />;
        if (node.item.type === 'L2') return <Folder size={18} className="text-yellow-600" />;
        return <FileText size={18} className="text-gray-400" />;
    };

    const getLabelStyle = () => {
        if (node.item.type === 'L1') return 'text-gray-900 font-bold text-lg';
        if (node.item.type === 'L2') return 'text-gray-800 font-semibold';
        return 'text-gray-600';
    };

    return (
        <div className="select-none">
            <div
                className={`flex items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group ${level === 0 ? 'bg-blue-50/50 mb-4 border border-blue-100' : ''}`}
                style={{ marginLeft: `${level * 24}px` }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="mr-2 text-gray-400 w-4 flex justify-center">
                    {hasChildren && (
                        isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                    )}
                </div>

                <div className="mr-3 p-1.5 bg-white rounded border border-gray-100 shadow-sm">
                    {getIcon()}
                </div>

                <div className="flex-1 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className={`mr-3 ${getLabelStyle()}`}>{node.item.pageName}</span>
                        <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 group-hover:bg-white transition-colors">
                            {node.item.url}
                        </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            {node.item.type}
                        </span>
                        <span>{node.item.wordCount}w</span>
                    </div>
                </div>
            </div>

            {isOpen && hasChildren && (
                <div className="relative">
                    {level > 0 && (
                        <div
                            className="absolute w-px bg-gray-200"
                            style={{ left: `${(level * 24) + 11}px`, top: '0', bottom: '16px' }}
                        />
                    )}
                    {node.children.map((child, idx) => (
                        <TreeItem key={idx} node={child} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
}
