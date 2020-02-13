import path from 'path'
import fs from 'fs-extra'
import marked from 'marked'
import { minify } from 'html-minifier'
import matter from 'gray-matter'

const outputDir = path.resolve(__dirname, "../public");
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
      <h1><a href="/">Stephen Vector</a></h1>
    </header>
    <section>
      {{main}}
    </section>
    <footer>
    </footer>
  </body>
</html>
`

const linksOnFrontPage: string[] = [];

docFiles.forEach(filename => {
  const filePath = path.resolve(__dirname, './docs/', filename)

  const { dir, name } = path.parse(filePath)

  const outputFilePath = `${dir}/${name}/index.html`.replace(__dirname, '')
  
  const permalink = `${dir}/${name}/`;

  const fileMarkdown = fs.readFileSync(filePath).toString();

  const parsedMarkdown = matter(fileMarkdown)
  
  linksOnFrontPage.push(`<a href="${permalink}">${parsedMarkdown.data.title}</a>`);

  let htmlOutput = `${template}`
  htmlOutput = htmlOutput.replace('{{head}}',`<title>${parsedMarkdown.data.title}</title>`)

  const fileHTML = marked(parsedMarkdown.content);

  const minifiedHTML = minify(
    htmlOutput.replace('{{main}}', fileHTML),
    { collapseWhitespace: true }
  );

  fs.outputFileSync(path.join(outputDir,outputFilePath), minifiedHTML);
})

let homepageHTML = `${template}`;
homepageHTML = homepageHTML.replace('{{head}}', '<title>Stephen Vector</title>');
homepageHTML = homepageHTML.replace('{{main}}', linksOnFrontPage.join(''));
homepageHTML = minify(homepageHTML, { collapseWhitespace: true})
fs.outputFileSync(path.join(outputDir, 'index.html'), homepageHTML);

// Generate Sitemap
