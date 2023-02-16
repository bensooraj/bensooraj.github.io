import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import glob from 'glob'

export const getPosts = (options) => {
    const mdFilesPath = path.join(process.cwd(), 'pages', 'blog', '**/*.mdx')
    const mdFiles = glob.sync(mdFilesPath)

    const posts = mdFiles
        .map((filePath) => {
            if (!filePath.endsWith('.mdx')) return;

            const fileContent = fs.readFileSync(
                filePath,
                'utf-8'
            );
            const { data, content } = matter(fileContent);

            const slug = path.parse(filePath).dir.split(path.sep).at(-1)

            return { data, content, slug };
        })
        .filter((post) => post);

    posts.sort((a, b) => {
        var keyA = new Date(a.data.date),
            keyB = new Date(b.data.date);
        // Compare the 2 dates
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
    })

    if (options != undefined) {
        if (options.num > 0) {
            return posts.slice(0, options.num)
        }
    }

    return posts
};

export const getPostSlugs = () => {
    const pattern = path.join(process.cwd(), 'posts', '**/*.mdx')
    const mdFiles = glob.sync(pattern)

    const slugs = mdFiles.map((mdFile) => {
        return path.parse(mdFile).dir.split(path.sep).at(-1)
    })

    return slugs;
}
