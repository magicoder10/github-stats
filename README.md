# Github Stats
> Embed Github profile every where you want

## Preview

### Commit Contributions
![](commits.png)

### Language Contributions
![](languages.png)

## Getting Started
### Installation
Include `github-stats.js` in your html `head` tag:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/byliuyang/github-stats@0.0.3/src/github-stats.js"></script>
```

For older releases, use the follow snippet instead:
```html
<script type="text/javascript" src="
https://cdn.jsdelivr.net/gh/byliuyang/github-stats@VERSION/src/github-stats.js"></script>
```
Please remember to replace `VERSION` with the version number you are using.

### Usage

To use Github Stats, add the following JavaScript to your website:

```javascript
(async () => {
    const GITHUB_USERNAME = 'byliuyang';
    const COMMITS_CONTAINER = '#github-contributions';
    const LANGUAGES_CONTAINER = '#github-language-distribution';

    const githubStats = await GithubStats(GITHUB_USERNAME);

    let githubCommits = document.querySelector(COMMITS_CONTAINER);
    /* Render SVG for commit contributions */
    let commitsContribSVG = githubStats.commitsContribSVG({
        rows: 7,
        space: 4,
        rectWidth: 16,
        levelColors: [
            {
                minCommits: 0,
                color: '#ebedf0'
            },
            {
                minCommits: 1,
                color: '#c6e48b'
            },
            {
                minCommits: 9,
                color: '#7bc96f'
            },
            {
                minCommits: 17,
                color: '#239a3b'
            },
            {
                minCommits: 26,
                color: '#196127'
            }
        ]
    });
    githubCommits.appendChild(commitsContribSVG);

    let githubLanguageDistribution = document.querySelector(LANGUAGES_CONTAINER);
    /* Render SVG for language contributions */
    let languageContribSVG = githubStats.languagesContribSVG({
        barHeight: 20,
        barWidth: githubLanguageDistribution.offsetWidth,
        lineSpacing: 4,
        languageNameWidth: 100,
        fontSize: 14
    });
    githubLanguageDistribution.appendChild(languageContribSVG);
})();
```

Please don't forget to replace `GITHUB_USERNAME` with **your** Github username and `*_CONTAINER` with the css selector where you want render the contributions inside.

### Options
#### Commit Contributions SVG
- **rows**: the number of rows in the graph
- **space**: the space between each square with unit in `px`.
- **rectWidth**: the width of the each square
- **levelColors**: the color of the squares varies based on the number of commits contributed on a day. `minCommits` refers to the minimal number of commits required to mark the square with color specified by the corresponding `color ` attribute.

#### Language Contributions SVG
- **barHeight**: the height of each rectangle
- **lineSpacing**: the space between each bar
- **languageNameWidth**: the width of language name
- **fontSize**: the font size of language names

## Release
The latest release is [v0.0.3](https://github.com/byliuyang/github-stats/releases/tag/v0.0.3).
You can find all the releases [here](https://github.com/byliuyang/github-stats/releases)

## Design Patterns
This project is engineered based on closure mentioned in [You Don't Know Js](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/README.md)

![](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/cover.jpg)

## Authors
- **Harry Liu** - *Initial work* - [byliuyang](https://github.com/byliuyang)

## License
This project is maintained under the MIT License.
