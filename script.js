

    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".footer-subscribe form");
    if (!form) {
      console.error("Form not found!");
      return;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      const checkbox = form.querySelector('input[type="checkbox"]');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();

      if (!checkbox.checked) {
        alert("Please agree to vibe responsibly 😅");
        return;
      }

      if (!name || !email) {
        alert("Please fill in your name and email!");
        return;
      }

    
      localStorage.setItem("subscriberName", name);

      
      alert(`Thanks ${name}! You're now part of the vibe ✨`);

    
      form.reset();
    });

    
    const savedName = localStorage.getItem("subscriberName");
    if (savedName) {
      console.log(`Welcome back, ${savedName}! 👋`);
    }
  });

  window.addEventListener("beforeunload", function () {
   
    window.scrollTo(0, 0);
  
    
    localStorage.clear();
  });
  
  const projects = [
    {
      img: 'assets/street.jpg',
      title: 'SUPERBLAZE DROP',
      tags: 'Fashion | Campaign | India',
      desc: 'A vibrant mix of street culture and hype visuals, designed to break norms and attract the bold.',
      link: '#'
    },
    {
      img: 'assets/night.jpg',
      title: 'NIGHT CITY CAMPAIGN',
      tags: 'Tech | Global Launch',
      desc: 'We painted the night with electric visuals and city-wide projections — a campaign that turned heads.',
      link: '#'
    },
    {
      img: 'assets/urban.jpg',
      title: 'URBAN LEGENDS',
      tags: 'Culture | Gen Z | Short Film',
      desc: 'A cinematic short capturing the raw energy of modern subcultures and their influence on trends.',
      link: '#'
    }
  ];
  
  let current = 0;
  
  function updateProject(index) {
    const p = projects[index];
    document.getElementById("project-img").src = p.img;
    document.getElementById("project-title").textContent = p.title;
    document.getElementById("project-tags").textContent = p.tags;
    document.getElementById("project-desc").textContent = p.desc;
    document.getElementById("project-link").href = p.link;
  }
  
  document.getElementById("next-btn").addEventListener("click", () => {
    current = (current + 1) % projects.length;
    updateProject(current);
  });
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    current = (current - 1 + projects.length) % projects.length;
    updateProject(current);
  });
  
  window.addEventListener("load", () => {
    current = 0;
    updateProject(current);
  });
  

