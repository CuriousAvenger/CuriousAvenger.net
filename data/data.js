$(document).ready(function () {
    $.getJSON('./data/data.json', function (data) {
        var projectContainer = $('#project');
        data.projects.forEach(function (project) {
            var projectCard = `
              <div class="isotope-item col-md-6 mb-5 ${project.section}">
                <div class="card project-card">
                    <div class="row">
                        <div class="col-12 col-xl-5 card-img-holder">
                            <img class="card-img" src="${project.image}" alt="${project.title}">
                        </div>
                        <div class="col-12 col-xl-7">
                            <div class="card-body">
                                <h5 class="card-title">${project.title}</h5>
                                <p class="card-text">${project.blurb}</p>
                            </div>
                        </div>
                    </div>
                    <div class="link-mask">
                        <a href="${project.link}" class="link-mask-link" target="_blank"></a>
                        <div class="link-mask-text">
                            <a href="${project.link}" class="btn btn-secondary" target="_blank">
                                <i class="fas fa-eye me-2"></i>View Project
                            </a>
                        </div>
                    </div>
                </div>
              </div>`;

            projectContainer.append(projectCard);
        });
    });
});