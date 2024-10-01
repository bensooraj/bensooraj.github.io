import fs from 'fs';
import path from 'path';
import { glob } from 'glob'
import { Plugin } from 'vite'
// @ts-ignore
import toc from 'markdown-toc'

function Galilee(): Plugin {
    return {
        name: 'galilee-plugin',
        async buildStart() {
            console.log('Running, Galilee!')
            const mdxFilesPath = path.join(process.cwd(), 'src', 'mdxdocs', 'blogs', '**/index.mdx')
            const files = glob.sync(mdxFilesPath).filter(file => file.endsWith('.mdx'));

            files.forEach(filePath => {
                const markdownWithMetadata = fs.readFileSync(
                    filePath,
                    'utf-8'
                );
                const tocJSON = toc(markdownWithMetadata).json
                const tocFilePath = path.join(path.dirname(filePath), 'toc.json');
                fs.writeFileSync(tocFilePath, JSON.stringify(tocJSON, null, 2), 'utf-8');
                console.log(`toc.json written to ${tocFilePath}`);
            })

        },
    };
}

export { Galilee }