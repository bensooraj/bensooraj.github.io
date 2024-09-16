import fs from 'fs';
import path from 'path';
import { glob } from 'glob'
import { Plugin } from 'vite'
import matter from 'gray-matter';

function Eden(): Plugin {
    return {
        name: 'eden-plugin',
        async buildStart() {
            console.log('Running, Eden!')
            const mdxFilesPath = path.join(process.cwd(), 'src', 'mdxdocs', 'blogs', '**/index.mdx')
            const files = glob.sync(mdxFilesPath).filter(file => file.endsWith('.mdx'));

            files.forEach(filePath => {
                const markdownWithMetadata = fs.readFileSync(
                    filePath,
                    'utf-8'
                );

                const slug = path.parse(filePath).dir.split(path.sep).at(-1)
                if (!slug) {
                    throw new Error(`Slug not found for file: ${filePath}`);
                }

                const { data } = matter(markdownWithMetadata);

                const metadataFilePath = path.join(path.dirname(filePath), 'metadata.json');
                fs.writeFileSync(metadataFilePath, JSON.stringify({ slug, ...data }, null, 2), 'utf-8');
                console.log(`toc.json written to ${metadataFilePath}`);
            })

        },
    };
}

export { Eden }