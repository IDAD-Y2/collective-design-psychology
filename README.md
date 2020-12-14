# Collective Design Psychology website

This repository holds a barebones structure for a collective website gathering research carried out in the field of Design Psychology by the 2nd years IDAD students at ITCarlow.

## How does this work ?

The main components used to enable this collaboration are:

* Git (version control) 
* etherpad (collaborative text editor: this instance is hosted at pads.tangible.tools)
* Jquery `.load()` function (<https://api.jquery.com/load/>)
* local development server (two options below)
* * python2: `python -m SimpleHTTPServer [port]`
* * python3: `python3 -m http.server [port]`
* * using `Live Server` extension within Visual Code (search the Extensions market)

## How do I use it ?

1. Clone a copy of this repository
2. Lauch your developments server (using Python or Visual Code)
3. Open the index.html page in your browser
4. Work out the structure of the folders, and which pads to open to edit each pages of the content, either html or CSS

## Why work this way ?

Ideologically: One of the main focuses of the Design Psychology module has been: psychology is about nuance, conversation, open questions and multiplicity of voices. We researched different topics in smaller groups and are learning about the topic from one another. Collaboration and sharing is a key component of this.

Practically: Coordinating the collaborative build up of web-content for this project could have been done using git. However, not everybody in the group is 100% comfortable with commiting, staging, pulling and pushing to git. Even in experienced groups, when 15 people collaborate on one single repository, there can be some issues. This etherpad to html system allows freedom for each group to present their work whichever way they choose, while being able to view other groups work simultaneously.

Sources: this method is heavily inspired by the [ether2html toolkit](http://osp.kitchen/tools/ether2html/) made by [OSP](osp.kitchen). The pagedJS and Markdown elements of the original toolkit were not necessary for this project, so they were removed. Thanks OSP! 