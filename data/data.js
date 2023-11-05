$(document).ready(function () {
    $.getJSON('./data/data.json', function (data) {
        var projectContainer = $('#project');
        data.projects.forEach(function (project) {
            var projectCard = `
                <div class="isotope-item col-md-6 mb-5 ${project.section}">
                    <div class="card project-card">
                        <div class="row">
                            <div class="col-12 col-xl-5 card-img-holder">
                                <img class="card-img" src="${project.image}" alt="image">
                            </div>
                            <div class="col-12 col-xl-7">
                                <div class="card-body">
                                    <h5 class="card-title">${project.title}</h5>
                                    <p class="card-text">${project.blurb}</p>
                                </div>
                            </div>
                        </div>
                        <div class="link-mask">
                            <a href="${project.link}" class="link-mask-link"></a>
                            <div class="link-mask-text">
                                <a href="${project.link}" class="btn btn-secondary">
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

$(document).ready(function () {
    $.getJSON('./data/data.json', function (data) {
        var blogContainer = $('#blog');
        console.log(data.blogs);
        data.blogs.forEach(function (blog) {
            console.log(blog.image);
            var blogCard = `
            <div class="col-md-4 mb-3">
                <div class="card blog-post-card">
                    <img class="card-img-top" src="${blog.image}" alt="image">
                    <div class="card-body">
                        <h5 class="card-title"><a class="theme-link" href="${blog.link}">${blog.title}</a></h5>
                        <p class="card-text">${blog.blurb}</p>
                        <p class="mb-0"><a class="text-link" href="${blog.link}">Read more &rarr;</a></p>
                        
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">${blog.published}</small>
                    </div>
                </div>
            </div>`;

            blogContainer.append(blogCard);
        });
    });
});

