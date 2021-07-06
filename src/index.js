#!/usr/bin/env node
const moment = require('moment')
const prompt = require('prompt')

const toTagLine = (tag => `  - ${tag}`)

const getBlogHeader = ({
  layout,
  date,
  categories,
  title,
  tags,
}) => {
  const tagList = tags
    .map(toTagLine)
    .join('\n')
  const blogHeader =
`---
layout: ${layout}
title:  "${title}"
date:   ${date}
categories: ${categories[0]}${tagList.length ? `\ntags:\n${tagList}` : ''}
---
`
  return blogHeader
}

const getDate = () => {
  return moment().format('YYYY-MM-DD HH:00:00 -0400')
}

const splitTags = (tags) => {
  return tags
    .toLowerCase()
    .split(',')
    .map(x => x.trim())
    .filter(x => x)
}

;(async () => {
  prompt.start()
  const layout = 'post'
  const date = getDate()
  const categories = ['blog']
  const { title, tags } = await prompt.get([
    {
      name: 'title',
      description: 'Blog title',
      required: true,
    },
    {
      name: 'tags',
      description: 'tags (comma-separated)'
    },
  ])
  const data = {
    layout,
    date,
    categories,
    title,
    tags: splitTags(tags),
  }
  const blogHeader = getBlogHeader(data)
  console.log(blogHeader)
})()
