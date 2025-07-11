<script>
  import { base } from '$app/paths';
</script>

<div class="min-h-screen bg-gray-900 text-gray-100">
  <!-- Hero Section -->
  <section class="h-[40vh] flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-gray-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.25),rgba(15,23,42,0))] blur-xl"></div>
      <div class="grid grid-cols-6 absolute inset-0">
        {#each Array(24) as _, i}
          <div class="h-full w-full border-r border-t border-white/5"></div>
        {/each}
      </div>
    </div>
    <div class="text-center px-4 z-10">
      <h1 class="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">About Me</h1>
      <p class="text-2xl mb-8 text-gray-200">Data Analyst & Visualization Specialist</p>
    </div>
  </section>

  <!-- Nav Section -->
  <nav class="backdrop-blur-md bg-gray-900/80 sticky top-0 z-10 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <a href="{base}/" class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Data Analyst</a>
        <div class="flex space-x-6">
          <a href="{base}/" class="font-semibold text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
          <a href="{base}/generic" class="font-semibold text-purple-400 transition-colors">About me</a>
          <a href="{base}/Jack_li_resume.pdf" target="_blank" class="font-semibold text-gray-300 hover:text-purple-400 transition-colors">Resume</a>
        </div>
        <div class="flex space-x-4">
          <a href="https://www.linkedin.com/in/jack-li-2000/" target="_blank" class="text-gray-400 hover:text-purple-400 transition-colors" aria-label="LinkedIn Profile">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://github.com/jack-li-2000?tab=repositories" target="_blank" class="text-gray-400 hover:text-purple-400 transition-colors" aria-label="GitHub Repositories">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- About Content -->
  <section class="py-20 px-4 md:px-8 max-w-4xl mx-auto">
    <div class="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
      <!-- Introduction Section -->
      <div class="mb-12">
        <h2 class="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Hello!</h2>
        <p class="text-gray-300 mb-8 text-center">
          I'm a data analyst with a passion for finding insight and telling stories through data.
          I have an Honours B.Sc. in Statistics and Computational Cognitive Sciences from the University of Toronto, 
          and a strong background in Computer Science.
        </p>
        
        <!-- Photos -->
        <div class="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <img src="{base}/images/capy.jpg" alt="Personal photo" class="w-full md:w-1/3 rounded-lg shadow-lg border border-gray-700" />
          <img src="{base}/images/polaroid.jpg" alt="Personal photo" class="w-full md:w-1/3 rounded-lg shadow-lg border border-gray-700" />
          <img src="{base}/images/eating.jpg" alt="Personal photo" class="w-full md:w-1/3 rounded-lg shadow-lg border border-gray-700" />
        </div>
        
        <p class="text-gray-300 mb-4">
          I have experience working with various tools and technologies for data cleaning, analysis, visualization, and machine learning. 
          My favourite tools include Python, SQL, R, Tableau, and Excel. I also pride myself in my superb communication skills. 
          My previous experiences aid me in being able to explain complex topics in an intuitive and clear manner for anyone to understand.
        </p>
        
        <p class="text-gray-300 mb-4">
          When I'm not being productive, my hobbies keep me busy. I have a long history with competitive team sports like volleyball and ultimate, 
          but also enjoy casually playing badminton and table tennis. On weekends, I often find myself expanding my horizons with new foods around 
          the city or catching up on the latest movies and games.
        </p>
        
        <p class="text-gray-300">
          I'm always eager to learn new skills and take on new challenges in data analytics and sciences. If you want to know more about me or my work, 
          feel free to contact me on Linkedin or through my email!
        </p>
      </div>
      
      <!-- Experience Section -->
      <div class="mb-12">
        <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Experience</h2>
        <!-- UofT -->
        <div>
          <h3 class="text-xl font-bold mb-1 text-white">Data Analyst @ OneDataTree</h3>
          <p class="text-gray-400 mb-4">(2024 – Present, Toronto ON)</p>

          <p class="text-gray-300 mb-4">
            As a Data Analyst at OneDataTree, I specialize in developing forecasting models, streamline reporting processes, and create data-driven tools to enhance efficiency and insights.
          </p>
          
          <ul class="list-disc pl-6 mb-4 text-gray-300">
            <li>Developed dashboard automation pipeline for data ingestion, processing, and reporting in SQL and Python.</li>
            <li>Implemented cross-database validation report to maintain data accuracy and reliability between internal and client records in SQL, Python, and Excel.</li>
            <li>Conducted financial predictive forecasting, classification, and ad hoc analytics.</li>
          </ul>
        </div>
        
        <!-- Teck Resources -->
        <div class="mb-10">
          <!-- <div class="flex flex-col items-center mb-6">
            <img src="{base}/images/teck.jpg" alt="Teck Resources Logo" class="max-w-xs rounded-lg shadow-lg border border-gray-700" />
          </div> -->
          
          <h3 class="text-xl font-bold mb-1 text-white">Data Science Intern @ Teck Resources</h3>
          <p class="text-gray-400 mb-4">(2021 – 2022, Vancouver BC)</p>
          
          <p class="text-gray-300 mb-4">
            At Teck, I dealt mainly in data processing, cleaning, exploratory analysis, classification and predictive modelling, and feature selection.
            I was a core team member that successfully deployed the equipment and machine failure classification models and the engine life cycle prediction model for haul trucks.
          </p>
          
          <div class="mb-6">
            <h4 class="font-semibold italic mb-2 text-purple-300">Machine Failure Classification</h4>
            <ul class="list-disc pl-6 mb-4 text-gray-300">
              <li>Performed data cleaning, conveyed statistical inferences and exploratory analysis with python and SQL.</li>
              <li>Retrieved relevant features for classification using forward stepwise, lasso, and elastinet feature selection.</li>
              <li>Identified equipment failure using classification models validated with F1-score.</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold italic mb-2 text-purple-300">Engine Life Cycle Prediction</h4>
            <ul class="list-disc pl-6 mb-4 text-gray-300">
              <li>Predicted equipment lifecycle, finding trend, best, worst case with regression models.</li>
              <li>Validated projected engine lifecycle model prediction results with acceptable RMSE and MAPE.</li>
              <li>Displayed insights with analytics dashboards and visualizations in PowerBI.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Skills Section -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">Python</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">SQL</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">R</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">Tableau</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">Excel</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">PowerBI</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">Data Cleaning</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">Data Visualization</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">Statistics</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">Machine Learning</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">Forecasting</div>
          <div class="bg-gray-700 p-3 rounded-lg text-center border border-gray-600 hover:border-purple-500 transition-colors">Communcation</div>
        </div>
      </div>
      
      <!-- Education Section -->
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Education</h2>
        <div class="mb-4">
          <h3 class="text-xl font-bold text-white">University of Toronto</h3>
          <p class="text-gray-300">Honours Bachelor of Science - Statistics and Computational Cognitive Sciences</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-950 text-white py-10 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <h3 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Contact</h3>
          <!-- <div class="mb-4">
            <p class="text-gray-400 mb-1">Address</p>
            <p class="text-white">Downtown Toronto, ON Canada</p>
          </div> -->
          <div class="mb-4">
            <p class="text-gray-400 mb-1">Email</p>
            <p class="text-white">Jack.li.2000@outlook.com</p>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Connect</h3>
          <div class="flex space-x-4">
            <a href="https://www.linkedin.com/in/jack-li-2000/" target="_blank" class="text-white hover:text-purple-400 transition-colors" aria-label="LinkedIn Profile">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/jack-li-2000?tab=repositories" target="_blank" class="text-white hover:text-purple-400 transition-colors" aria-label="GitHub Repositories">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-800 text-center md:text-left">
        <p class="text-gray-500">© {new Date().getFullYear()} Jack Li. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div> 