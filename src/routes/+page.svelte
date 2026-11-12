<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	const email = 'jack.li.2000@outlook.com';
	const sections = ['projects', 'experience', 'about'];

	let year = $state('2026');
	let copyLabel = $state('Copy email');
	let active = $state<string | null>(null);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

	function isActive(id: string) {
		return active === id ? 'true' : undefined;
	}

	async function copyEmail() {
		let copied = false;
		try {
			await navigator.clipboard.writeText(email);
			copied = true;
		} catch {
			copied = false;
		}
		copyLabel = copied ? 'Copied' : 'Press Ctrl+C to copy';
		clearTimeout(copyTimer);
		copyTimer = setTimeout(() => (copyLabel = 'Copy email'), 1800);
	}

	onMount(() => {
		year = String(new Date().getFullYear());

		const observer =
			'IntersectionObserver' in window
				? new IntersectionObserver(
						(entries) => {
							for (const entry of entries) {
								if (entry.isIntersecting && sections.includes(entry.target.id)) active = entry.target.id;
							}
						},
						{ rootMargin: '-35% 0px -60% 0px' }
					)
				: null;

		document.querySelectorAll('main > section').forEach((section) => observer?.observe(section));

		return () => {
			observer?.disconnect();
			clearTimeout(copyTimer);
		};
	});
</script>

<svelte:head>
	<title>Jack Li</title>
	<meta
		name="description"
		content="Jack Li is a data analyst working in SQL, Python, statistics, forecasting and dashboards."
	/>
</svelte:head>

<a class="skip" href="#projects">Skip to projects</a>

<header class="hero">
	<img
		class="bg"
		src="{base}/images/new-york-night-2400.webp"
		srcset="{base}/images/new-york-night-1280.webp 1280w, {base}/images/new-york-night-2400.webp 2400w"
		sizes="100vw"
		width="2400"
		height="1350"
		alt=""
		fetchpriority="high"
	/>
	<div class="shade"></div>
	<div class="dim"></div>
	<div class="wrap hero-in">
		<h1>Jack Li</h1>
		<p class="role">Data Analyst</p>
		<p class="lede">
			Analytics, dashboards, forecasting, statistics, and machine learning to empower decision making.
		</p>
		<div class="cta">
			<a class="btn primary" href="#projects">View projects</a>
			<a class="btn ghost" href="{base}/Jack_li_resume.pdf" target="_blank" rel="noopener">
				Download resume
			</a>
		</div>
	</div>
	<a class="cue" href="#projects" aria-label="Scroll to projects"></a>
</header>

<div class="panel">
	<nav class="bar" aria-label="Main">
		<div class="wrap">
			<a class="mark" href="#">Jack Li</a>
			<div class="links">
				<a href="#projects" aria-current={isActive('projects')}>Projects</a>
				<a href="#experience" aria-current={isActive('experience')}>Experience</a>
				<a href="#about" aria-current={isActive('about')}>About</a>
			</div>
			<div class="end">
				<a class="pill" href="{base}/Jack_li_resume.pdf" target="_blank" rel="noopener">Resume</a>
				<a
					class="icon"
					href="https://www.linkedin.com/in/jack-li-2000/"
					target="_blank"
					rel="noopener"
					aria-label="LinkedIn"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"
						><path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/></svg
					>
				</a>
				<a
					class="icon"
					href="https://github.com/jack-li-2000?tab=repositories"
					target="_blank"
					rel="noopener"
					aria-label="GitHub"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/></svg
					>
				</a>
			</div>
		</div>
	</nav>

	<main>
		<section class="part wrap" id="projects" aria-labelledby="projects-h">
			<div class="part-head">
				<h2 id="projects-h">Projects</h2>
				<p>Dashboards and analyses built in Tableau, Python, SQL and Excel.</p>
			</div>

			<article class="card feature">
				<div class="media">
					<img src="{base}/images/airbnb2023.webp" width="1397" height="773" alt="" loading="lazy" />
				</div>
				<div class="body">
					<span class="badge">Featured</span>
					<h3>
						<a
							href="https://public.tableau.com/app/profile/jack.li2849/viz/TorontoAirBNBFrequencyPriceDashboard/Dashboard1"
							target="_blank"
							rel="noopener">Toronto Airbnb popularity dashboard</a
						>
					</h3>
					<p class="desc">
						An interactive map and dashboard of Toronto Airbnb listings. It shows which neighbourhoods,
						bedroom counts and room types are most popular, the median price per bed, how many guests
						listings take, and how prices move over the year. Cleaned and analysed in Python, visualised
						in Tableau.
					</p>
					<div class="foot">
						<ul class="chips"><li>Python</li><li>Tableau</li></ul>
						<span class="action" aria-hidden="true">Open the dashboard</span>
					</div>
				</div>
			</article>

			<div class="grid">
				<article class="card">
					<div class="media">
						<img
							src="{base}/images/covid_tableau.webp"
							width="900"
							height="632"
							alt=""
							loading="lazy"
						/>
					</div>
					<div class="body">
						<h3>
							<a
								href="https://public.tableau.com/app/profile/jack.li2849/viz/CovidGlobalInfectionAnalysis/Dashboard1"
								target="_blank"
								rel="noopener">Global COVID-19 visualization</a
							>
						</h3>
						<p class="desc">
							Infection, mortality and vaccination rates compared across countries, including how
							vaccination rate relates to mortality and infection. Data cleaned and explored first in SQL
							Server.
						</p>
						<div class="foot">
							<ul class="chips"><li>SQL Server</li><li>Tableau</li></ul>
							<span class="action" aria-hidden="true">Open the dashboard</span>
						</div>
					</div>
				</article>
				<article class="card">
					<div class="media">
						<img src="{base}/images/excel_bike.webp" width="900" height="638" alt="" loading="lazy" />
					</div>
					<div class="body">
						<h3>
							<a href="https://1drv.ms/x/s!AuAwC-uA0Qvejw6JYu21H3PxdCA5?e=zYwsce" target="_blank" rel="noopener"
								>Bike sales analysis</a
							>
						</h3>
						<p class="desc">
							Who buys bikes in North America and Europe, broken down by marital status, income, children,
							age bracket and commute distance.
						</p>
						<div class="foot">
							<ul class="chips"><li>Excel</li></ul>
							<span class="action" aria-hidden="true">Open the workbook</span>
						</div>
					</div>
				</article>
				<article class="card">
					<div class="media">
						<img src="{base}/images/covid_sql.webp" width="800" height="596" alt="" loading="lazy" />
					</div>
					<div class="body">
						<h3>
							<a
								href="https://github.com/jack-li-2000/covid_analysis_protfolio_project"
								target="_blank"
								rel="noopener">COVID-19 data exploration</a
							>
						</h3>
						<p class="desc">
							Exploratory analysis of a global COVID-19 dataset: infection and mortality rates, total cases
							by country and continent, and vaccination rates. Also prepared the data behind the Tableau
							visualization.
						</p>
						<div class="foot">
							<ul class="chips"><li>SQL Server</li></ul>
							<span class="action" aria-hidden="true">Read the code</span>
						</div>
					</div>
				</article>
				<article class="card">
					<div class="media">
						<img src="{base}/images/heatmap.webp" width="892" height="676" alt="" loading="lazy" />
					</div>
					<div class="body">
						<h3>
							<a
								href="https://github.com/jack-li-2000/movies_python_correlation_portfolio_project"
								target="_blank"
								rel="noopener">Film industry analysis</a
							>
						</h3>
						<p class="desc">
							Which features of a film track with its gross earnings, using data scraped from IMDb.
							Cleaning, exploration and correlation analysis in a Jupyter notebook.
						</p>
						<div class="foot">
							<ul class="chips"><li>Python</li><li>Jupyter</li></ul>
							<span class="action" aria-hidden="true">Read the code</span>
						</div>
					</div>
				</article>
				<article class="card">
					<div class="media">
						<img src="{base}/images/wordnet.webp" width="900" height="560" alt="" loading="lazy" />
					</div>
					<div class="body">
						<h3>
							<a
								href="https://github.com/jack-li-2000/wordnet_SPP_significance_testing"
								target="_blank"
								rel="noopener">WordNet vs SPP significance testing</a
							>
						</h3>
						<p class="desc">
							WordNet was built to model how people relate words, then became a staple of natural language
							processing. This project tests whether its similarity scores still match human word-relation
							data.
						</p>
						<div class="foot">
							<ul class="chips"><li>Python</li><li>statistics</li></ul>
							<span class="action" aria-hidden="true">Read the code</span>
						</div>
					</div>
				</article>
				<div class="more">
					<h3>More projects</h3>
					<p>
						Every Python, SQL, Excel, Power BI and Tableau project is on GitHub, and the dashboards are on
						Tableau Public.
					</p>
					<div class="row">
						<a
							class="btn small line"
							href="https://github.com/jack-li-2000?tab=repositories"
							target="_blank"
							rel="noopener">GitHub</a
						>
						<a
							class="btn small line"
							href="https://public.tableau.com/app/profile/jack.li2849"
							target="_blank"
							rel="noopener">Tableau Public</a
						>
					</div>
				</div>
			</div>
		</section>

		<section class="part wrap" id="experience" aria-labelledby="exp-h">
			<div class="part-head">
				<h2 id="exp-h">Experience</h2>
				<p>Analytics and data science roles in retail, finance, and resource sectors.</p>
			</div>
			<ol class="jobs">
				<li class="job current">
					<div class="side">
						<p class="when">Mar 2026 – present</p>
						<p class="co">Best Buy</p>
					</div>
					<div class="main">
						<h3>Intermediate Data Analyst</h3>
						<p class="focus">
							Making analytics faster, more reliable, and more impactful for decisions.
						</p>
						<ul>
							<li>
								Developed and optimized queries and data models behind critical reports, and modernized the
								reports themselves.
							</li>
							<li>
								Analysed customer segments and delivery feasibility against carrier pricing, finding 18% of
								remote-area customers newly serviceable.
							</li>
							<li>
								Conducted difference-in-differences analyses across 30+ stores to test for optimal registers placements
								to lift mobile activation revenue over the holidays.
							</li>
							<li>
								Built same-day delivery cost and speed simulations from local carrier data, finding
								contract inefficiencies that informed negotiations.
							</li>
						</ul>
					</div>
				</li>
				<li class="job">
					<div class="side">
						<p class="when">Apr 2025 – Feb 2026</p>
						<p class="co">OneDataTree</p>
					</div>
					<div class="main">
						<h3>Data Developer Analyst</h3>
						<p class="focus">
							Financial and customer forecasting, end-to-end reporting pipelines, and tools for catching
							problems early.
						</p>
						<ul>
							<li>
								Built and maintained an automated ingestion and dashboard pipeline in Python, SQL and
								Tableau, cutting daily reporting time by 75% and report errors by 10%.
							</li>
							<li>
								Forecast revenue with time series and regression models in Python, improving reporting
								accuracy by 15% and supporting budget decisions.
							</li>
							<li>
								Developed a churn classification and customer lifetime value model that flagged high-risk
								customers for targeted retention, reducing churn by 7%.
							</li>
							<li>
								Built and deployed an entity flow application tracking revenue, balance and spending for
								50+ customer entities.
							</li>
						</ul>
					</div>
				</li>
				<li class="job">
					<div class="side">
						<p class="when">Jan 2024 – Apr 2025</p>
						<p class="co">OneDataTree</p>
					</div>
					<div class="main">
						<h3>Data Reconciliation Analyst</h3>
						<p class="focus">
							Keeping data accurate, catching issues early, and giving product leadership the numbers they
							needed.
						</p>
						<ul>
							<li>
								Built a cross-database validation report in SQL, Python and Excel comparing internal and
								client records, reducing discrepancies by 43%.
							</li>
							<li>
								Designed weekly KPI dashboards on revenue, churn and product usage, so leadership could
								spot and act on trends within 24 hours.
							</li>
						</ul>
					</div>
				</li>
				<li class="job">
					<div class="side">
						<p class="when">Aug 2021 – Jun 2022</p>
						<p class="co">Teck Resources</p>
					</div>
					<div class="main">
						<h3>Data Scientist</h3>
						<p class="focus">
							Core team member on the equipment failure classification models and the engine life cycle
							model for haul trucks, all deployed to production.
						</p>
						<ul>
							<li>
								Cleaned data, ran exploratory analysis and reported statistical findings in Python and
								SQL, cutting daily reporting time by 22%.
							</li>
							<li>
								Selected classification features with ElasticNet, improving precision, reducing
								overfitting and raising the failure detection rate by 16%.
							</li>
							<li>
								Modelled equipment life cycles with regression to guide replace-or-maintain decisions,
								lowering maintenance costs by 14% and raising uptime by 10%.
							</li>
						</ul>
					</div>
				</li>
			</ol>
		</section>

		<section class="part wrap" id="about" aria-labelledby="about-h">
			<div class="part-head"><h2 id="about-h">About me</h2></div>
			<div class="about">
				<div>
					<div class="text">
						<p class="big">
							Hi, I’m Jack. I find stories in data and explain them so anyone in the room
							can follow.
						</p>
						<p>
							I have an Honours B.Sc. in Statistics and Computational Cognitive Science from the University
							of Toronto, and a strong background in computer and data science. My favourite tools are Python, SQL, PowerBI, and Excel.
						</p>
						<p>
							Away from work I play a lot of team sports, mostly volleyball and ultimate. On weekends I can usually be found trying new restaurants somewhere in the
							city or catching up on movies and games.
						</p>
					</div>
					<div class="facts">
						<div>
							<h3>Skills</h3>
							<ul class="chips">
								<li>Python</li>
								<li>SQL</li>
								<li>R</li>
								<li>Tableau</li>
								<li>Power BI</li>
								<li>Excel</li>
								<li>Data cleaning</li>
								<li>Data visualization</li>
								<li>Statistics</li>
								<li>Machine learning</li>
								<li>Forecasting</li>
								<li>Communication</li>
							</ul>
						</div>
						<div>
							<h3>Education</h3>
							<p class="edu">
								University of Toronto<span
									>Honours B.Sc., Statistics and Computational Cognitive Science</span
								>
							</p>
						</div>
					</div>
				</div>
				<div class="collage">
					<img
						src="{base}/images/capy.webp"
						width="900"
						height="1200"
						alt="Jack in sunglasses, with a capybara resting in the grass behind him"
						loading="lazy"
					/>
					<img
						src="{base}/images/polaroid.webp"
						width="900"
						height="1200"
						alt="A polaroid of Jack pinned to a corkboard, captioned new profile picture"
						loading="lazy"
					/>
					<img
						src="{base}/images/eating.webp"
						width="900"
						height="1336"
						alt="Jack eating brunch at a restaurant table"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	</main>

	<footer class="contact" id="contact" aria-labelledby="contact-h">
		<div class="wrap">
			<h2 id="contact-h">Contact</h2>
			<p class="ask">If you want to know more about me or my work, email me or connect on LinkedIn.</p>
			<div class="mailrow">
				<a class="email" href="mailto:{email}">{email}</a>
				<button class="btn small line copy" type="button" data-email={email} onclick={copyEmail}>
					{copyLabel}
				</button>
			</div>
			<div class="social">
				<a href="https://www.linkedin.com/in/jack-li-2000/" target="_blank" rel="noopener">
					<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"
						><path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/></svg
					>LinkedIn
				</a>
				<a href="https://github.com/jack-li-2000?tab=repositories" target="_blank" rel="noopener">
					<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/></svg
					>GitHub
				</a>
				<a href="https://public.tableau.com/app/profile/jack.li2849" target="_blank" rel="noopener">
					Tableau Public
				</a>
				<a href="{base}/Jack_li_resume.pdf" target="_blank" rel="noopener">Resume (PDF)</a>
			</div>
			<p class="legal">© <span id="yr">{year}</span> Jack Li</p>
		</div>
	</footer>
</div>