import path from 'path'
import fs from 'fs-extra'
import marked from 'marked'
import { minify } from 'html-minifier'
import matter from 'gray-matter'

const outputDir = path.resolve(__dirname, "public");
const docsPath = path.resolve(__dirname, "docs");
const docFiles = fs.readdirSync(docsPath);

const template = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    {{head}}
  </head>
  <body>
    <header>
    </header>
    <section>
      {{main}}
    </section>
    <footer>
    </footer>
  </body>
</html>
`

docFiles.forEach(filename => {
  const filePath = path.resolve(__dirname, './docs/', filename)

  const { dir, name } = path.parse(filePath)

  const outputFilePath = `${dir}/${name}/index.html`.replace(__dirname, '')

  const fileMarkdown = fs.readFileSync(filePath).toString();

  const parsedMarkdown = matter(fileMarkdown)

  let htmlOutput = `${template}`
  htmlOutput = htmlOutput.replace('{{head}}',`<title>${parsedMarkdown.data.title}</title>`)

  const fileHTML = marked(parsedMarkdown.content);

  const minifiedHTML = minify(
    htmlOutput.replace('{{main}}', fileHTML),
    { collapseWhitespace: true }
  );

  fs.outputFileSync(path.join(outputDir,outputFilePath), minifiedHTML);
})

// Generate Sitemap
