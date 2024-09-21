class SpecialHeader extends HTMLElement {
  constructor() {
    super();
    this.scrolled = false;
    this.toggle = false;
  }

  connectedCallback() {
    this.render();
    this.addStyles();
    this.addEventListeners();
    this.highlightActiveLink();
  }

  render() {
    this.innerHTML = `
      <!-- Header ( Navbar ) code start here -->
      <div id="header" class="w-full h-[90px] py-[80px">
        <div class="navbar px-[25px] md:px-[96px] py-[20px] bg-transparent flex justify-between items-center fixed top-0 z-[1000] transition-all duration-300 ease-in-out">
          <div class="flex flex-row gap-2">
            <div class="bg-Logo w-[200px] h-[60px] bg-contain bg-no-repeat"></div>
          </div>
          <div class="md:flex hidden gap-[34px] items-center">
            <a href="/index.html" class='nav-link text-[14px] font-bold leading-[17.6px]'>Home</a>
            <a href="/components/solution/solution.html" class='nav-link text-[14px] font-bold leading-[17.6px]'>Solution</a>
            <a href="/components/contact/contact.html" class='nav-link text-[14px] font-bold leading-[17.6px]'>Contact us</a>
            <button type="button" class="flex items-center justify-center w-[134px] h-[40px] px-[24px] py-[14px] text-[14px] font-bold text-[black] rounded-[8px]">Button</button>
          </div>

          <div class="md:hidden flex items-center relative z-[1001]">
            <span class="toggle-icon bars" aria-hidden="true">
              <i class="fas fa-bars text-white text-2xl" aria-hidden="true"></i>
            </span>
            <span class="toggle-icon times hidden" aria-hidden="true">
              <i class="fas fa-times text-white text-2xl" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        <div class="mobile-nav md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-start transform ${this.toggle ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out">
          <ul class="flex flex-col items-start gap-10 pl-7 text-black font-bold mt-32">
            <li class="cursor-pointer" data-link="home"><a href="/index.html" class="nav-link">Home</a></li>
            <li class="cursor-pointer" data-link="solution"><a href="/components/solution/solution.html" class="nav-link">Solution</a></li>
            <li class="cursor-pointer" data-link="contact"><a href="/components/contact/contact.html" class="nav-link">Contact us</a></li>
            <li class="cursor-pointer" data-link="button"><button type="button" class="mnavb flex items-center justify-center w-[134px] h-[40px] px-[24px] py-[14px] text-[14px] font-bold rounded-[8px]">Button</button></li>
          </ul>
        </div>
      </div>
      <!-- Header ( Navbar ) code end here -->
    `;
  }

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Navbar basic styles*/
      .navbar {
        position: fixed; /* Make the navbar fixed */
        top: 0; /* Position it at the top of the viewport */
        width: 100%; /* Occupy full width */
        z-index: 1000; /* Ensure it stays on top of other elements */
        height: 90px; /* Set height to 90px */
        border: 1.5px solid #f9f9f9;
        border-radius: 2px;        
        background-color: #f9f9f9;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);        
      }
      .navbar button{
        color: #fa65b1 !important;
        border: 1px solid #fa65b1 !important;    
        transition: 1s ease;  
      }
      .navbar button:hover{
        background-color: #fa65b1;
        color: #fff !important;      
      }
      .mnavb{
        color: #fa65b1 !important;
        border: 1px solid #fa65b1 !important;        
      } 
      .mnavb:hover{
              background-color: #fa65b1;
        color: #fff !important;   
      }   

      .navbar a:hover {
        /* Add padding to create space between the link text and the border */
        padding-bottom: 8px;
        border-bottom: 1.3px solid;
        color: #726ae3;

        /* Apply a gradient as border */
        border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #726ae3 52%, rgba(255, 255, 255, 0.1) 100%) 1
        /* This ensures the gradient is applied properly */
      }
          /* Update color of toggle icons */
  .toggle-icon i {
    color: black; /* Change color to black */
  }

      .hidden {
        display: none;
      }

      /* Ensure flex container does not interfere with desktop view */
      .md\\:flex.hidden {
        display: none;
      }

      @media (min-width: 768px) {
        .md\\:flex {
          display: flex !important;
        }
        .mobile-nav {
          display: none;
        }
      }

      .active-link {
        color: #fa65b1 !important;
      }
    `;
    this.appendChild(style);
  }

  addEventListeners() {
    const toggleIcons = this.querySelectorAll('.toggle-icon');
    const mobileNav = this.querySelector('.mobile-nav');

    toggleIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        this.toggle = !this.toggle;
        this.updateToggleIcons();
        mobileNav.classList.toggle('translate-x-0');
      });
    });

    const mobileNavLinks = this.querySelectorAll('.mobile-nav li');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.toggle = false;
        this.updateToggleIcons();
        mobileNav.classList.remove('translate-x-0');
      });
    });
  }

  highlightActiveLink() {
    const links = this.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }

  updateToggleIcons() {
    const barsIcon = this.querySelector('.toggle-icon.bars');
    const timesIcon = this.querySelector('.toggle-icon.times');

    if (this.toggle) {
      barsIcon.classList.add('hidden');
      timesIcon.classList.remove('hidden');
    } else {
      barsIcon.classList.remove('hidden');
      timesIcon.classList.add('hidden');
    }
  }
}

customElements.define('special-header', SpecialHeader);
