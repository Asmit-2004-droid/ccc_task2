 // Tab switching
    function showTab(tab) {
      document.getElementById("formTab").classList.add("hidden");
      document.getElementById("carouselTab").classList.add("hidden");
      if(tab === "form") 
        document.getElementById("formTab").classList.remove("hidden");
      if(tab === "carousel")
        document.getElementById("carouselTab").classList.remove("hidden");
    }

    // Form validation
    document.getElementById("regForm").addEventListener("submit", function(e){
      e.preventDefault();
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let contact = document.getElementById("contact").value.trim();
      let gender = document.getElementById("gender").value;
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;
      let error = "";

      if(!name || !email || !contact || !gender || !password || !confirmPassword){
        error = "All fields are required!";
      } else if(!/^[A-Za-z ]+$/.test(name)){
        error = "Name must contain only letters.";
      } else if(!/^[^@]+@[^@]+\.[^@]+$/.test(email)){
        error = "Invalid email format.";
      } else if(!/^[0-9]{10}$/.test(contact)){
        error = "Contact number must be 10 digits.";
      } else if(password.length < 6 ||
                !/[A-Z]/.test(password) ||
                !/[a-z]/.test(password) ||
                !/[0-9]/.test(password) ||
                !/[!@#$%^&*]/.test(password)){
        error = "Password must be 6+ chars, include uppercase, lowercase, number & special char.";
      } else if(password !== confirmPassword){
        error = "Passwords do not match.";
      }
      if (!error) {
    document.getElementById("regForm").reset();
      document.getElementById("error").innerText = error || "Registration Successful!";
    }});

    // Carousel
    let index = 0;
    function moveSlide(step){
      let slides = document.getElementById("slides");
      let total = slides.children.length;
      index+=step;
      if(index < 0) 
        index = total - 1;
      else if(index >= total) 
        index = 0;
      slides.style.transform = "translateX(" + (-600 * index) + "px)";
    }
    setInterval(() => moveSlide(1), 7000);  
    
    
    // Rating system
    var stars = document.querySelectorAll(".star");
    let selected = 0;

    stars.forEach(star => {
      star.addEventListener("mouseover", function(){
        resetStars();
        glow(this.dataset.value);
      });
      star.addEventListener("mouseout", function(){
        resetStars();
        if(selected) glow(selected);
      });
      star.addEventListener("click", function(){
        if(selected == this.dataset.value){
          selected = 0;
          resetStars();
        } else {
          selected = this.dataset.value;
          glow(selected);
        }
      });
    });

    function glow(val){
      stars.forEach(star => {
        if(star.dataset.value <= val) star.classList.add("active");
      });
    }
    function resetStars(){
      stars.forEach(star => star.classList.remove("active"));
    }

    
