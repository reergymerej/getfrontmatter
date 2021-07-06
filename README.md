# getfrontmatter

Answer a couple prompts and get the [front matter](https://jekyllrb.com/docs/front-matter/) for a jekyll post.

## Example

    ./bin/main
    prompt: Blog title:  Hey, now.  We're the monkeys!
    prompt: tags (comma-separated):  monkey, business, bananas
    ---
    layout: post
    title:  "Hey, now.  We're the monkeys!"
    date:   2021-07-05 20:00:00 -0400
    categories: blog
    tags:
      - monkey
      - business
      - bananas
    ---

## Installation and Usage


**Global**

    npm i --global getfrontmatter
    getfrontmatter

**Local**

    npm i --save getfrontmatter

    import getfrontmatter from 'getfrontmatter'
    getfrontmatter()

