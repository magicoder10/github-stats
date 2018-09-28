let GithubStats = {
    init: function (username) {
        return new Promise((resolve, reject) => {
            fetch(`https://urlreq.appspot.com/req?method=GET&url=https://github.com/${username}`)
                .then(response => {
                    if (response.status !== 200) {
                        reject(response.statusText);
                        return;
                    }
                    response.text()
                        .then(html => {
                            let parser = new DOMParser();
                            let doc = parser.parseFromString(html, 'text/html');
                            let calendarSvg = doc.querySelector('.js-calendar-graph-svg');
                            let days = calendarSvg.querySelectorAll('g > g > rect');

                            Array.from(days).map(day => {
                                return ({
                                    numCommits: day.dataset.count,
                                    date: day.dataset.date
                                })
                            });

                            this._commitsByDay = Array.from(days).map(day => {
                                return ({
                                    numCommits: day.dataset.count,
                                    date: day.dataset.date
                                })
                            });

                            resolve();
                        });
                })
        })
    },
    contributionsSvg: function (config = {}) {
        const rows = config.rows || 7;
        const space = config.space || 2;
        const rectWidth = config.rectWidth || 12;

        const levelColors = config.levelColors || [
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
                miminCommitsn: 26,
                color: '#196127'
            }
        ];

        const cols = Math.ceil(this._commitsByDay.length / rows);

        let svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgEl.setAttribute('width', `${cols * (rectWidth + space) - space}`);
        svgEl.setAttribute('height', `${rows * (rectWidth + space) - space}`);

        let groupEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        for (let i = 0; i < this._commitsByDay.length; i++) {
            let col = Math.floor(i / rows);
            let row = i % rows;
            let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', `${col * (rectWidth + space)}`);
            rect.setAttribute('y', `${row * (rectWidth + space)}`);
            rect.setAttribute('width', `${rectWidth}`);
            rect.setAttribute('height', `${rectWidth}`);

            let color = null;
            let minCommits = -1;
            let mumCommits = this._commitsByDay[i].numCommits;

            levelColors.forEach(levelColor => {
                if (mumCommits >= levelColor.minCommits && levelColor.minCommits > minCommits) {
                    minCommits = levelColor.minCommits;
                    color = levelColor.color;
                }
            });

            rect.setAttribute('fill', color);
            groupEl.appendChild(rect);
        }

        svgEl.appendChild(groupEl);
        return svgEl;
    }
};
