document.addEventListener('DOMContentLoaded', function() {
    const jobListingsContainer = document.querySelector('.jobs');

    fetch('jobs.json')
      .then(response => response.json())
      .then(data => {
        let counter = 0;
        let row;
        data.forEach(job => {
            if (counter % 3 === 0) {
              row = document.createElement('div');
              row.classList.add('row');
              jobListingsContainer.appendChild(row);
            }
          const jobElement = document.createElement('section');
          jobElement.classList.add('job-listings');
          jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Experience:</strong> ${job.experience}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
          `;
          row.appendChild(jobElement);
        });
        jobListingsContainer.appendChild(row);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      function showPage(page) {
        currentPage = page;
        displayJobs(currentPage);
    }
    
    displayJobs(currentPage);
    
    // Pagination functionality
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });
  });

