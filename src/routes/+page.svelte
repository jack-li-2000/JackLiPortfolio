<script>
  import { base } from '$app/paths';
  import { parallax } from '$lib/parallax';
  // Project data from the original HTML
  const featuredProject = {
    title: "Toronto AirBNB Popularity Insights Dashboard",
    image: `${base}/images/airbnb2023.png`,
    description: "An interactive map and dashboard of AirBNB in Toronto providing insights towards popularity in features like number of bedrooms, median price per bed, popular neighbourhoods, number accommodated, price over time, and AirBNB room type. Analysis and data cleaning performed in Python and imported to Tableau to deliver insights and display final visualizations.",
    url: "https://public.tableau.com/app/profile/jack.li2849/viz/TorontoAirBNBFrequencyPriceDashboard/Dashboard1"
  };

  const projects = [
    {
      title: "Global COVID-19 Visualization",
      image: `${base}/images/covid_tableau.png`,
      description: "A global analysis of COVID-19 infection rate vs mortality rate, vaccination rate vs mortality rate, vaccination rate vs infection rate, etc. Data cleaned and initially explored in MS SQL",
      url: "https://public.tableau.com/app/profile/jack.li2849/viz/CovidGlobalInfectionAnalysis/Dashboard1"
    },
    {
      title: "Bike Sales Analysis and Visualizations",
      image: `${base}/images/excel_bike.png`,
      description: "An analysis of bike purchases in Microsoft Excel. This project features bike purchase analysis in North America and Europe with features including marital status, income, children, age bracket, etc.",
      url: "https://1drv.ms/x/s!AuAwC-uA0Qvejw6JYu21H3PxdCA5?e=zYwsce"
    },
    {
      title: "COVID-19 Data Analysis",
      image: `${base}/images/covid_sql.png`,
      description: "Exploratory data analysis of Covid-19 Dataset in MS SQL Server. Findings include infection rate, mortality rate, total cases by country and continent, vaccination rate, and vaccination survival percentage. Also prepared data for use in Tableau Covid visualization project.",
      url: "https://github.com/jack-li-2000/covid_analysis_protfolio_project"
    },
    {
      title: "Film Industry Analysis",
      image: `${base}/images/heatmap.png`,
      description: "An analysis of the film industry using python and jupyter notebook. A look at different features scraped from the IMDb website. Performing data cleaning and organization, exploring the dataset, and looking at correlations between features and gross earnings of movies.",
      url: "https://github.com/jack-li-2000/movies_python_correlation_portfolio_project"
    },
    {
      title: "Wordnet vs SPP Significance Testing",
      image: `${base}/images/wordnet.png`,
      description: "Determine if similarity in the NLP datastructure Wordnet is correlated to similarity of word relations in humans. Wordnet was originally developed to model similarity structures in humans but has evolved since its adoption in the natural language processing space. We attempt to determine if it still functions in its original purpose.",
      url: "https://github.com/jack-li-2000/wordnet_SPP_significance_testing"
    },
    {
      title: "All Analysis Portfolio Projects",
      image: `${base}/images/blur.png`,
      description: "Check out all my Python, SQL, Excel, PowerBI, and Tableau analyses and data science projects on Github! (A link to my tableau profile can be found in the bio)",
      url: "https://github.com/jack-li-2000?tab=repositories"
    }
  ];
</script>

<div class="min-h-screen bg-slate-950 text-slate-100">
  <!-- Hero Section -->
  <section class="h-screen sticky top-0 z-0 flex items-center justify-center bg-slate-950 text-white overflow-hidden will-change-transform" use:parallax>
    <img
      src="{base}/images/new-york-night.jpg"
      alt=""
      class="absolute inset-0 h-full w-full object-cover object-center"
      fetchpriority="high"
    />
    <div class="absolute inset-0 bg-slate-950/30"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950/95"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_62%_40%_at_50%_44%,rgba(2,6,23,0.55),rgba(2,6,23,0)_72%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,rgba(37,99,235,0.35),rgba(2,6,23,0)_62%)]"></div>
    <div class="text-center px-4 z-10">
      <h1 class="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-50 to-accent-100 drop-shadow-[0_6px_30px_rgba(2,6,23,1)]">Jack Li</h1>
      <p class="text-2xl mb-8 text-slate-100 drop-shadow-[0_2px_14px_rgba(2,6,23,1)]">Skilled in analytics, dashboards, statistics, machine learning, forecasting, and more.</p>
      <div class="flex justify-center space-x-4 mt-6">
        <a href="{base}/#projects" class="bg-gradient-to-r from-brand-500 to-accent-500 text-white px-6 py-3 rounded-lg font-medium hover:from-brand-400 hover:to-accent-400 transition-all shadow-lg shadow-brand-900/40 hover:shadow-brand-500/40">View Projects</a>
        <a href="{base}/generic" class="border border-brand-300/30 backdrop-blur-sm bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-400/20 hover:border-accent-300/60 transition-all">About Me</a>
      </div>
      <div class="animate-bounce mt-16">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>

  <!-- Content that rises over the pinned hero -->
  <div class="relative z-10 bg-slate-950 shadow-[0_-24px_60px_-16px_rgba(2,6,23,0.9)]">
    <!-- Nav Section -->
    <nav class="backdrop-blur-md bg-slate-950/80 sticky top-0 z-10 border-b border-brand-500/15">
      <div class="max-w-7xl mx-auto px-3 sm:px-4">
        <div class="flex justify-between items-center gap-2 sm:gap-4 py-3 sm:py-4">
          <a href="{base}/" class="shrink-0 whitespace-nowrap text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-brand-200 to-accent-200">Jack Li</a>
          <div class="flex items-center gap-2 sm:gap-6">
            <a href="{base}/#projects" class="whitespace-nowrap text-sm sm:text-base font-semibold text-brand-300 underline underline-offset-8 decoration-accent-400 decoration-2 transition-colors">Projects</a>
            <a href="{base}/generic" class="whitespace-nowrap text-sm sm:text-base font-semibold text-slate-300 hover:text-brand-300 transition-colors">About me</a>
            <a href="{base}/Jack_li_resume.pdf" target="_blank" class="whitespace-nowrap rounded-full border border-highlight-400/40 px-3 py-1 text-sm sm:text-base font-semibold text-highlight-200 hover:bg-highlight-400/10 hover:border-highlight-300 transition-colors">Resume</a>
          </div>
          <div class="flex items-center gap-2 sm:gap-4 shrink-0">
            <a href="https://www.linkedin.com/in/jack-li-2000/" target="_blank" class="text-slate-400 hover:text-accent-300 transition-colors" aria-label="LinkedIn Profile">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/jack-li-2000?tab=repositories" target="_blank" class="text-slate-400 hover:text-accent-300 transition-colors" aria-label="GitHub Repositories">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-brand-200 to-accent-200">Projects</h2>

      <!-- Featured Project -->
      <div class="mb-20">
        <h3 class="text-2xl font-semibold mb-6 text-center text-slate-300">Featured Project</h3>
        <div class="bg-slate-900 rounded-xl shadow-xl overflow-hidden hover:shadow-brand-500/20 transform hover:-translate-y-1 transition-all duration-300 border border-slate-800 hover:border-brand-500/40">
          <div class="md:flex flex-col lg:flex-row">
            <div class="md:w-full lg:w-1/2 relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-brand-600/30 via-brand-500/10 to-accent-500/25 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                class="h-96 w-full object-cover"
              />
            </div>
            <div class="md:w-full lg:w-1/2 p-8">
              <h4 class="text-2xl font-bold mb-4 text-white">{featuredProject.title}</h4>
              <p class="text-slate-400 mb-6">{featuredProject.description}</p>
              <a 
                href={featuredProject.url} 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block bg-gradient-to-r from-brand-500 to-accent-500 text-white px-6 py-3 rounded-lg font-medium hover:from-brand-400 hover:to-accent-400 transition-all shadow-lg shadow-brand-900/40 hover:shadow-brand-500/40"
              >
                View Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Projects -->
      <h3 class="text-2xl font-semibold mb-6 text-center text-slate-300">Other Projects</h3>
      <div class="grid md:grid-cols-2 gap-8">
        {#each projects as project}
          <div class="bg-slate-900 rounded-xl shadow-xl overflow-hidden hover:shadow-brand-500/20 transform hover:-translate-y-1 transition-all duration-300 border border-slate-800 hover:border-brand-500/40 group">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-brand-600/30 via-brand-500/10 to-accent-500/25 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                class="h-64 w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h4 class="text-xl font-bold mb-2 text-white">{project.title}</h4>
              <p class="text-slate-400 mb-4">{project.description}</p>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block border border-brand-400/40 bg-brand-500/10 text-brand-100 px-4 py-2 rounded-lg font-medium hover:bg-brand-500 hover:text-white hover:border-brand-400 transition-all shadow-lg shadow-brand-950/40"
              >
                View Project
              </a>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900/40 text-white py-10 border-t border-brand-500/15">
      <div class="max-w-7xl mx-auto px-4">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <h3 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-brand-200 to-accent-200">Contact</h3>
            <!-- <div class="mb-4">
              <p class="text-slate-400 mb-1">Address</p>
              <p class="text-white">Downtown Toronto, ON Canada</p>
            </div> -->
            <div class="mb-4">
              <p class="text-slate-400 mb-1">Email</p>
              <p class="text-white">Jack.li.2000@outlook.com</p>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-brand-200 to-accent-200">Connect</h3>
            <div class="flex space-x-4">
              <a href="https://www.linkedin.com/in/jack-li-2000/" target="_blank" class="text-slate-200 hover:text-accent-300 transition-colors" aria-label="LinkedIn Profile">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/jack-li-2000?tab=repositories" target="_blank" class="text-slate-200 hover:text-accent-300 transition-colors" aria-label="GitHub Repositories">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
