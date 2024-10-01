import fs from 'fs';
import path from 'path';
import { glob } from 'glob'
import { Plugin } from 'vite'
import matter from 'gray-matter';
import { BlogPostMetadata } from '../types/blogs';

function Eden(): Plugin {
    return {
        name: 'eden-plugin',
        async buildStart() {
            console.log('Running, Eden!')
            const mdxFilesPath = path.join(process.cwd(), 'src', 'mdxdocs', 'blogs', '**/index.mdx')
            const files = glob.sync(mdxFilesPath).filter(file => file.endsWith('.mdx'));

            // 1. Number of posts per tag
            const postsPerTag = new Map<string, number>();
            // 2. Posts by tags
            const postsByTag = new Map<string, BlogPostMetadata[]>();

            files.forEach(filePath => {
                const markdownWithMetadata = fs.readFileSync(
                    filePath,
                    'utf-8'
                );

                const slug = path.parse(filePath).dir.split(path.sep).at(-1)
                if (!slug) {
                    throw new Error(`Slug not found for file: ${filePath}`);
                }

                const { data }: { data: BlogPostMetadata } = matter(markdownWithMetadata);
                // Set tags count
                data.tags?.forEach((tag: string) => {
                    postsPerTag.set(tag, (postsPerTag.get(tag) || 0) + 1);
                })
                // Set posts by tags
                data.tags?.forEach((tag: string) => {
                    const tagPosts = postsByTag.get(tag) || [];
                    tagPosts.push({ ...data, slug });
                    postsByTag.set(tag, tagPosts);
                })

                const metadataFilePath = path.join(path.dirname(filePath), 'metadata.json');
                fs.writeFileSync(metadataFilePath, JSON.stringify({ ...data, slug }, null, 2), 'utf-8');
                console.log(`toc.json written to ${metadataFilePath}`);
            })
            console.log('postsPerTag:', postsPerTag);
            fs.writeFileSync(path.join(process.cwd(), 'src', 'mdxdocs', 'blogs', 'postsPerTag.json'), JSON.stringify([...postsPerTag], null, 2), 'utf-8');
            console.log('postsByTag:', postsByTag);
            fs.writeFileSync(path.join(process.cwd(), 'src', 'mdxdocs', 'blogs', 'postsByTag.json'), JSON.stringify([...postsByTag], null, 2), 'utf-8');
        },
    };
}

export { Eden }