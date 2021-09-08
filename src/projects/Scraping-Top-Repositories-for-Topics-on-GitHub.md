---
title: Scraping Top Repositories for Topics on GitHub
slug: Scraping-Top-Repositories-for-Topics-on-GitHub
domains: Web Scraping
stack: Jupyter_Notebook
code_link: https://github.com/vignesh-cloud-prog/Web-Scraping/blob/main/ScrapingTopRepositoriesForTopicsOnGitHub.ipynb
project_link: null
date: 2021-08-09T00:00:00+00:00
thumb: ../images/thumbs/skate.png
featured: ../images/featured/skate-banner.png
---

# Introduction

Here are the steps we'll follow:

- We're going to scrape https://github.com/topics
- We'll get a list of topics. For each topic, we'll get topic title, topic page URL and topic description
- For each topic, we'll get the top 25 repositories in the topic from the topic page
- For each repository, we'll grab the repo name, username, stars and repo URL
- For each topic we'll create a CSV file in the following format:

```
Repo Name,Username,Stars,Repo URL
three.js,mrdoob,69700,https://github.com/mrdoob/three.js
libgdx,libgdx,18300,https://github.com/libgdx/libgdx
```


