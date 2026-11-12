<script>
  import { base } from '$app/paths';
  import { parallax } from '$lib/parallax';

  const skills = [
    'Python',
    'SQL',
    'R',
    'Tableau',
    'Excel',
    'PowerBI',
    'Data Cleaning',
    'Data Visualization',
    'Statistics',
    'Machine Learning',
    'Forecasting',
    'Communcation'
  ];
</script>

<div class="min-h-screen bg-slate-950 text-slate-100">
  <!-- Hero Section -->
  <section class="h-[40vh] sticky top-0 z-0 flex items-center justify-center bg-slate-950 text-white overflow-hidden will-change-transform" use:parallax>
    <!-- Full-bleed photo; the short hero crops top/bottom so the width always matches the window -->
    <img
      src="{base}/images/new-york-night.jpg"
      alt=""
      class="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
      fetchpriority="high"
    />
    <div class="absolute inset-0 bg-slate-950/30"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/90"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_62%_55%_at_50%_50%,rgba(2,6,23,0.5),rgba(2,6,23,0)_78%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(37,99,235,0.35),rgba(2,6,23,0)_62%)]"></div>
    <div class="text-center px-4 z-10">
      <h1 class="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-50 to-accent-100 drop-shadow-[0_6px_30px_rgba(2,6,23,1)]">About Me</h1>
      <p class="text-2xl mb-8 text-slate-100 drop-shadow-[0_2px_14px_rgba(2,6,23,1)]">Data Analyst & Scientist</p>
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
            <a href="{base}/" class="whitespace-nowrap text-sm sm:text-base font-semibold text-slate-300 hover:text-brand-300 transition-colors">Projects</a>
            <a href="{base}/generic" class="whitespace-nowrap text-sm sm:text-base font-semibold text-brand-300 underline underline-offset-8 decoration-accent-400 decoration-2 transition-colors">About me</a>
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

    <!-- About Content -->
    <section class="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div class="bg-slate-900 rounded-xl shadow-xl p-8 border border-slate-800">
        <!-- Introduction Section -->
        <div class="mb-12">
          <h2 class="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-brand-200 to-accent-200">Hello!</h2>
          <p class="text-slate-300 mb-8 text-center">
            I'm a data analyst with a passion for finding insight and telling stories through data.
            I have an Honors B.Sc. in Statistics and Computational Cognitive Sciences from the University of Toronto, 
            and a strong background in Computer Science.
          </p>
        
          <!-- Photos -->
          <div class="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <img src="{base}/images/capy.jpg" alt="Personal photo" class="w-full md:w-1/3 rounded-lg shadow-lg border border-slate-800" />
            <img src="{base}/images/polaroid.jpg" alt="Personal photo" class="w-full md:w-1/3 rounded-lg shadow-lg border border-slate-800" />
            <img src="{base}/images/eating.jpg" alt="Personal photo" class="w-full md:w-1/3 rounded-lg shadow-lg border border-slate-800" />
          </div>
        
          <p class="text-slate-300 mb-4">
            I have experience working with various tools and technologies for data cleaning, analysis, visualization, and machine learning. 
            My favourite tools include Python, SQL, R, Tableau, and Excel. I also pride myself in my superb communication skills. 
            My previous experiences aid me in being able to explain complex topics in an intuitive and clear manner for anyone to understand.
          </p>
        
          <p class="text-slate-300 mb-4">
            When I'm not being productive, my hobbies keep me busy. I have a long history with competitive team sports like volleyball and ultimate, 
            but also enjoy casually playing badminton and table tennis. On weekends, I often find myself expanding my horizons with new foods around 
            the city or catching up on the latest movies and games.
          </p>
        
          <p class="text-slate-300">
            I'm always eager to learn new skills and take on new challenges in data analytics and sciences. If you want to know more about me or my work, 
            feel free to contact me on Linkedin or through my email!
          </p>
        </div>
      
        <!-- Experience Section -->
        <div class="mb-12">
          <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-brand-200 to-accent-200">Experience</h2>
          <!-- BestBuy -->
          <div>
            <h3 class="text-xl font-bold mb-1 text-white">Intermediate Data Analyst @ BestBuy</h3>
            <p class="text-slate-400 mb-4">(03/2026 – Present)</p>

            <p class="text-slate-300 mb-4">
              As an Intermediate Data Analyst at BestBuy, I focus on making our reporting and delivery analytics faster, more reliable, and more useful for decision making.
              My main responsibilities include developing and optimizing SQL queries and data models behind critical reports, working on new initiatives like evaluating customer segmentation and delivery feasibility to uncover newly serviceable markets,
              measuring the revenue impact of in-store initiatives through various analyses, and simulating variable logistics metrics to inform carrier contract negotiations.
            </p>
          
            <ul class="list-disc pl-6 mb-4 text-slate-300">
              <li>Optimized SQL queries and data models, maintaining and modernizing critical reports.</li>
              <li>Conducted customer segment and delivery-feasibility analysis, identifying 18% of remote area customers as newly serviceable based on carrier pricing models, enabling expansion into previously excluded regions and an estimated $5M in revenue through the end of the year.</li>
              <li>Delivered difference-in-difference analyses across 30+ stores to evaluate register placement to increase mobile device activation revenue during holiday periods.</li>
              <li>Delivered same-day delivery cost and speed simulation models using local carrier data, identifying contract inefficiencies and informing negotiations.</li>
            </ul>
          </div>

          <!-- OneDataTree 2 -->
          <div>
            <h3 class="text-xl font-bold mb-1 text-white">Data Developer Analyst @ OneDataTree</h3>
            <p class="text-slate-400 mb-4">(04/2025 – 02/2026)</p>

            <p class="text-slate-300 mb-4">
              As a Data Developer Analyst at OneDataTree, I prioritize the production of data analytics and data management projects. 
              My main responsibilities include developing financial and customer forecasting models, pushing end to end reporting pipelines, and creating data-driven tools to enhance efficiency and early detection.
            </p>
          
            <ul class="list-disc pl-6 mb-4 text-slate-300">
              <li>Built and maintained end-to-end data ingestion and dashboard automation pipeline using Python, SQL, and Tableau, slashing daily reporting time commitment by 75% and cutting report-generation errors by 10%.</li>
              <li>Conducted financial predictive forecasting, leveraging Time Series and Regression analytics with Python, boosting revenue reporting accuracy by 15% and supporting strategic budgeting decisions.</li>
              <li>Developed and maintained Classification and Customer Lifetime Value model in Python to identify high risk churn profiles, enabling targeted retention campaigns, reducing churn rate by 7%.</li>
              <li>Developed and deployed an Entity Flow Analysis application tracking revenue, balance, and expenditure for 50+ customer entities.</li>
            </ul>
          </div>

          <!-- OneDataTree 1 -->
          <div>
            <h3 class="text-xl font-bold mb-1 text-white">Data Reconciliation Analyst @ OneDataTree</h3>
            <p class="text-slate-400 mb-4">(01/2024 - 04/2025)</p>

            <p class="text-slate-300 mb-4">
              As a Data Reconciliation Analyst at OneDataTree, I specialize in maintaining data integrity, early detection of issues, and provide insight to product leadership.
            </p>
          
            <ul class="list-disc pl-6 mb-4 text-slate-300">
              <li>Implemented cross-database validation report to maintain data accuracy and reliability between internal and client records with SQL, Python, and Excel, significantly reducing discrepancies by 43%.</li>
              <li>Designed and delivered weekly KPI dashboards, providing real-time visibility into revenue, churn, and product usage, enabling leadership to identify and act on emerging trends within 24 hours.</li>
            </ul>
          </div>
        
          <!-- Teck Resources -->
          <div class="mb-10">
            <!-- <div class="flex flex-col items-center mb-6">
              <img src="{base}/images/teck.jpg" alt="Teck Resources Logo" class="max-w-xs rounded-lg shadow-lg border border-slate-800" />
            </div> -->
          
            <h3 class="text-xl font-bold mb-1 text-white">Data Scientist @ Teck Resources</h3>
            <p class="text-slate-400 mb-4">(08/2021 – 06/2022)</p>
          
            <p class="text-slate-300 mb-4">
              At Teck, I dealt mainly in data processing, cleaning, exploratory analysis, classification and predictive modelling, and feature selection.
              I was a core team member that successfully deployed the equipment and machine failure classification models and the engine life cycle prediction model for haul trucks.
            </p>
          
            <div class="mb-6">
              <ul class="list-disc pl-6 mb-4 text-slate-300">
                <li>Performed data cleaning, conveyed statistical inferences, and conducted exploratory analysis with Python and SQL, resulting in a 22% reduction in daily reporting time commitment.</li>
                <li>Retrieved relevant features for classification using ElasticNet feature selection, improving model precision and reducing overfitting, leading to 16% increase in detection rate.</li>
                <li>Predicted equipment lifecycle trends to inform replace vs. maintain decisions using regression models, resulting in a 14% reduction in maintenance costs and a 10% increase in equipment uptime.</li>
              </ul>
            </div>
          </div>
        </div>
      
        <!-- Skills Section -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-brand-200 to-accent-200">Skills</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            {#each skills as skill}
              <div class="p-3 rounded-lg text-center border font-medium transition-colors border-highlight-400/60 bg-highlight-500/30 text-highlight-100 hover:border-highlight-300 hover:bg-highlight-400/40 hover:text-white">{skill}</div>
            {/each}
          </div>
        </div>
      
        <!-- Education Section -->
        <div class="mb-8">
          <h2 class="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-brand-200 to-accent-200">Education</h2>
          <div class="mb-4">
            <h3 class="text-xl font-bold text-white">University of Toronto</h3>
            <p class="text-slate-300">Honors Bachelor of Science - Statistics and Computational Cognitive Sciences</p>
          </div>
        </div>
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