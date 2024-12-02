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
