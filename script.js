const HTML_JOB = document.getElementById('job')
const HTML_PROJECT = document.getElementById('project')
const HTML_TECH = document.getElementById('tech')

if (HTML_TECH) fetch('./resource/technologies.json')
    .then(response => response.json())
    .then(data => {
        let parsed = ''
        for (item of data) parsed += `
            <a class="card" href="${item.link}" target="_blank" title="Click to access ${item.title} documentation">
                <img src="${item.image}"/>
                <span>${item.title}</span>
            </a>
        `
        HTML_TECH.innerHTML = parsed
    })

if (HTML_PROJECT) fetch('./resource/projects.json')
    .then(response => response.json())
    .then(data => {
        let parsed = ''
        for (item of data) parsed += `
            <div class="card">
                <h1>${item.title}</h1>
                <div>${item.tags.map(tag => `<span class="badge">${tag}</span>`).toString().replaceAll(',', '')}</div>
                <div>
                    <a href="${item.repo}" target="_blank">
                        <button>
                            <span class="material-symbols-outlined">open_in_new</span> Show repo
                        </button>
                    </a>
                    <a  href="${item.link}" target="_blank">
                        <button>
                            <span class="material-symbols-outlined">open_in_new</span> Live demo
                        </button>
                    </a>
                </div>
            </div>
        `
        HTML_PROJECT.innerHTML = parsed
    })

if (HTML_JOB) fetch('./resource/jobs.json')
    .then(response => response.json())
    .then(data => {
        let parsed = ''
        for (item of data) parsed += `
            <div class="card">
                <img src="${item.image}"/>
                <h1>${item.title}</h1>
                <h3><span class="material-symbols-outlined">calendar_month</span>${item.time.start} - ${item.time.end ?? 'Today'}<h3>
                <h2><a href="${item.society.link}" target="_blank">${item.society.name}</a></h2>
                <p>${item.description}</p>
            </div>
        `
        HTML_JOB.innerHTML = parsed
    })
