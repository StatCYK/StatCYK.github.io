---
permalink: /
layout: home
title: "Home"
excerpt: "Statistics, machine learning, and AI for scientific discovery"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<main class="academic-main" id="academic-content">
  <header class="academic-profile">
    <img src="{{ '/images/ychen.png' | relative_url }}" width="175" height="175" alt="Portrait of Yongkai Chen">
    <div>
      <h1>Yongkai Chen <span class="academic-name-cn" lang="zh">陈永凯</span></h1>
      <p class="academic-affiliation">Postdoctoral Researcher<br>Department of Statistics<br>Harvard University</p>
      <a class="academic-email" href="mailto:yongkaichen@fas.harvard.edu"><i class="fas fa-envelope" aria-hidden="true"></i> yongkaichen@fas.harvard.edu</a>
      <p class="academic-links"><a href="https://scholar.google.com/citations?user=Ifht6gwAAAAJ&amp;hl=en"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Google Scholar</a><a href="https://github.com/StatCYK"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a></p>
    </div>
  </header>

  <p>I am a postdoctoral researcher in the Department of Statistics at Harvard University, working with <a href="https://statistics.fas.harvard.edu/people/samuel-kou">Samuel Kou</a>. I received my Ph.D. in Statistics from the University of Georgia in 2024, advised by <a href="https://zhonglabuga.github.io/">Wenxuan Zhong</a> and <a href="https://bdalpingio.github.io/">Ping Ma</a>, and my B.S. in Mathematical Statistics from Nankai University in 2019.</p>

  <section class="academic-section" aria-labelledby="research-title">
    <h2 id="research-title">Research overview</h2>
    <p>My research develops statistical foundations for AI-driven scientific discovery, with applications in computational biology and protein science. My interests include Bayesian nonparametric modeling and inference, uncertainty quantification, and scalable and quantum statistical computing.</p>
    <figure class="academic-overview">
      <a href="{{ '/images/research/research-overview.png' | relative_url }}" aria-label="View the research overview at full size">
        <img src="{{ '/images/research/research-overview.png' | relative_url }}" width="1672" height="940" alt="Research overview: scientific questions and biological data lead to AI-generated predictions and ensembles, then scientific inference and discovery, supported by Bayesian nonparametric modeling and inference and scalable and quantum statistical computing.">
      </a>
    </figure>
  </section>

  <section class="academic-section" id="research-display" aria-label="Explore research">
    <div class="research-tabs" role="tablist" aria-label="Research overview sections">
      <button type="button" role="tab" id="tab-publications" aria-controls="publications" aria-selected="true"><span class="research-tab-icon"><i class="fas fa-book-open" aria-hidden="true"></i></span><span>Selected publications</span></button>
      <button type="button" role="tab" id="tab-interdisciplinary" aria-controls="interdisciplinary" aria-selected="false" tabindex="-1"><span class="research-tab-icon"><i class="fas fa-dna" aria-hidden="true"></i></span><span>Interdisciplinary research</span></button>
      <button type="button" role="tab" id="tab-software" aria-controls="software" aria-selected="false" tabindex="-1"><span class="research-tab-icon"><i class="fas fa-wrench" aria-hidden="true"></i></span><span>Open-source software &amp; tools</span></button>
    </div>
    <section id="publications" role="tabpanel" aria-labelledby="tab-publications" tabindex="0">
      <div class="research-filters" role="group" aria-label="Filter publications by topic">
        <span>Topics:</span>
        <button type="button" data-filter="all" aria-pressed="true">All</button>
        <button type="button" data-filter="bayesian" aria-pressed="false"><i class="fas fa-brain" aria-hidden="true"></i> Bayesian learning</button>
        <button type="button" data-filter="computing" aria-pressed="false"><i class="fas fa-atom" aria-hidden="true"></i> Quantum statistical computing</button>
        <button type="button" data-filter="biology" aria-pressed="false"><i class="fas fa-dna" aria-hidden="true"></i> Computational biology</button>
      </div>
      <p class="research-count" aria-live="polite"></p>
    <article class="academic-paper" id="paper-aoas" data-topic="biology">
      <a class="academic-paper-media" href="{{ '/images/research/metamorphic-classification-overview.png' | relative_url }}" aria-label="Enlarge the metamorphic protein classification workflow">
        <img src="{{ '/images/research/metamorphic-classification-overview.png' | relative_url }}" width="210" height="144" loading="lazy" alt="Metamorphic protein classification workflow: protein sequence, SMICE structure ensembles, extracted features, and random forest fold-switching probability prediction">
      </a>
      <div>
        <h3><a href="https://arxiv.org/abs/2512.10066">Classifying Metamorphic versus Single-Fold Proteins with Statistical Learning and AlphaFold2</a></h3>
        <p class="academic-paper-authors"><strong>Yongkai Chen</strong>, Samuel W. K. Wong, S. C. Kou</p>
        <p class="academic-paper-venue"><em>Annals of Applied Statistics, accepted, 2026</em></p>
        <p class="academic-paper-summary">Statistical learning and AlphaFold2 features for identifying proteins with alternative folds.</p>
        <p class="academic-paper-links"><a href="https://arxiv.org/abs/2512.10066">[paper]</a><a href="https://github.com/StatCYK/Metamorphic-Classify">[code]</a></p>
      </div>
    </article>

    <article class="academic-paper" id="paper-smice" data-topic="biology">
      <a class="academic-paper-media" href="{{ '/images/research/smice-overview-v2.png' | relative_url }}" aria-label="Enlarge the figure for smice">
        <img src="{{ '/images/research/smice-overview-v2.png' | relative_url }}" width="210" height="144" loading="lazy" alt="Uncovering Distinct Protein Conformations Using Coevolutionary Information and AlphaFold overview">
      </a>
      <div>
        <h3><a href="https://doi.org/10.1101/2025.10.08.681198">Uncovering Distinct Protein Conformations Using Coevolutionary Information and AlphaFold</a></h3>
        <p class="academic-paper-authors"><strong>Yongkai Chen</strong>, Samuel W. K. Wong, S. C. Kou</p>
        <p class="academic-paper-venue"><em>bioRxiv, 2025</em></p>
        <p class="academic-paper-summary">SMICE uses coevolutionary information to guide MSA sampling and explore distinct protein conformations.</p>
        <p class="academic-paper-links"><a href="https://doi.org/10.1101/2025.10.08.681198">[paper]</a><a href="https://github.com/StatCYK/SMICE">[code]</a></p>
      </div>
    </article>

    <article class="academic-paper" id="paper-wahkon" data-topic="bayesian">
      <a class="academic-paper-media" href="{{ '/images/research/wahkon.svg' | relative_url }}" aria-label="Enlarge the figure for wahkon">
        <img src="{{ '/images/research/wahkon.svg' | relative_url }}" width="210" height="144" loading="lazy" alt="Wahkon: A Statistically Principled Deep RKHS Superposition Network overview">
      </a>
      <div>
        <h3><a href="https://arxiv.org/abs/2605.14041">Wahkon: A Statistically Principled Deep RKHS Superposition Network</a></h3>
        <p class="academic-paper-authors"><strong>Yongkai Chen</strong>, Wenxuan Zhong, Ping Ma</p>
        <p class="academic-paper-venue"><em>STAI-X, 2026 · Best Paper Award</em></p>
        <p class="academic-paper-summary">Smooth link functions, RKHS regularization, and hierarchical Gaussian-process priors for deep learning.</p>
        <p class="academic-paper-links"><a href="https://arxiv.org/abs/2605.14041">[paper]</a><a href="https://github.com/StatCYK/Wahkon">[code]</a></p>
      </div>
    </article>

    <article class="academic-paper" id="paper-bkd" data-topic="bayesian">
      <a class="academic-paper-media" href="{{ '/images/research/bayesian-kd.svg' | relative_url }}" aria-label="Enlarge the figure for bkd">
        <img src="{{ '/images/research/bayesian-kd.svg' | relative_url }}" width="210" height="144" loading="lazy" alt="Bayesian Knowledge Distillation: A Bayesian Perspective of Distillation with Uncertainty Quantification overview">
      </a>
      <div>
        <h3><a href="https://proceedings.mlr.press/v235/fang24a.html">Bayesian Knowledge Distillation: A Bayesian Perspective of Distillation with Uncertainty Quantification</a></h3>
        <p class="academic-paper-authors">Luyang Fang*, <strong>Yongkai Chen*</strong>, Wenxuan Zhong, Ping Ma</p>
        <p class="academic-paper-venue"><em>ICML, 2024 · * Equal contribution</em></p>
        <p class="academic-paper-summary">Teacher-informed priors connect knowledge distillation with Bayesian inference and uncertainty quantification.</p>
        <p class="academic-paper-links"><a href="https://proceedings.mlr.press/v235/fang24a.html">[paper]</a></p>
      </div>
    </article>

    <article class="academic-paper" id="paper-bgs" data-topic="computing">
      <a class="academic-paper-media" href="{{ '/images/research/quantum-bootstrap.png' | relative_url }}" aria-label="Enlarge the figure for bgs">
        <img src="{{ '/images/research/quantum-bootstrap.png' | relative_url }}" width="210" height="144" loading="lazy" alt="Illustration of a quantum circuit">
      </a>
      <div>
        <h3><a href="https://doi.org/10.1080/01621459.2024.2404259">Bisection Grover’s Search Algorithm and Its Application in Analyzing CITE-seq Data</a></h3>
        <p class="academic-paper-authors">Ping Ma*, <strong>Yongkai Chen*</strong>, Haoran Lu, Wenxuan Zhong</p>
        <p class="academic-paper-venue"><em>Journal of the American Statistical Association, 2024 · * Equal contribution</em></p>
        <p class="academic-paper-summary">Quantum search for statistical computation, with an application to multimodal single-cell data.</p>
        <p class="academic-paper-links"><a href="https://doi.org/10.1080/01621459.2024.2404259">[paper]</a><a href="https://github.com/StatCYK/BGS-for-CITEseq">[code]</a></p>
      </div>
    </article>

    <article class="academic-paper" id="paper-qboot" data-topic="computing">
      <a class="academic-paper-media" href="{{ '/images/research/quantum-bootstrap-v2.png' | relative_url }}" aria-label="Enlarge the figure for qboot">
        <img src="{{ '/images/research/quantum-bootstrap-v2.png' | relative_url }}" width="210" height="144" loading="lazy" alt="Quantum Statistical Bootstrap overview">
      </a>
      <div>
        <h3><a href="https://arxiv.org/abs/2604.00951">Quantum Statistical Bootstrap</a></h3>
        <p class="academic-paper-authors"><strong>Yongkai Chen</strong>, Ping Ma, Wenxuan Zhong</p>
        <p class="academic-paper-venue"><em>arXiv preprint, 2026</em></p>
        <p class="academic-paper-summary">Quantum algorithms for bootstrap computation, with an analysis of their statistical error properties.</p>
        <p class="academic-paper-links"><a href="https://arxiv.org/abs/2604.00951">[paper]</a><a href="https://github.com/StatCYK/quantum-bootstrap">[code]</a></p>
      </div>
    </article>
    <article class="academic-paper" id="paper-fluid" data-topic="bayesian">
      <a class="academic-paper-media" href="{{ '/images/research/fluid-correlation-figure14.png' | relative_url }}" aria-label="Enlarge Figure 14 from Fluid Correlation">
        <img src="{{ '/images/research/fluid-correlation-figure14.png' | relative_url }}" width="210" height="144" loading="lazy" alt="Figure 14 from Fluid Correlation: microbial association networks at days 1, 15, 29, 43, 50, and 57">
      </a>
      <div>
        <h3><a href="https://doi.org/10.1080/10618600.2024.2444373">Fluid Correlation: A Novel Nonparametric Metric to Assess the Dynamic Association</a></h3>
        <p class="academic-paper-authors"><strong>Yongkai Chen</strong>, Shushan Wu, Ping Ma, Wenxuan Zhong</p>
        <p class="academic-paper-venue"><em>Journal of Computational and Graphical Statistics, 2025</em></p>
        <p class="academic-paper-summary">A nonparametric metric for assessing dynamic association, with applications to microbiome data.</p>
        <p class="academic-paper-links"><a href="https://doi.org/10.1080/10618600.2024.2444373">[paper]</a></p>
      </div>
    </article>
      <p class="academic-publications-link"><a href="{{ '/publications/' | relative_url }}">Complete publication list</a></p>
    </section>
    <section id="interdisciplinary" role="tabpanel" aria-labelledby="tab-interdisciplinary" tabindex="0">
      <article class="research-entry research-entry--illustrated">
        <div class="research-entry-media"><img src="{{ '/images/research/protein-folding-overview.png' | relative_url }}" alt="Amino acid sequence folding into a three-dimensional protein structure"></div>
        <div>
          <h3>Protein science</h3>
          <p>I combine statistical learning, protein structure prediction, and coevolutionary information to study alternative protein conformations and fold switching.</p>
          <p><a href="#publications/biology" data-research-topic="biology">Related publications: AOAS and SMICE</a></p>
        </div>
      </article>
      <article class="research-entry research-entry--illustrated">
        <div class="research-entry-media">
          <img src="{{ '/images/research/single-cell-overview-v2.png' | relative_url }}" alt="Schematic cell with RNA and surface proteins, and multimodal CITE-seq measurements">
        </div>
        <div>
          <h3>Single-cell and spatial omics</h3>
          <p>My work includes multimodal single-cell integration, spatial transcriptomics denoising, and quantum search applied to CITE-seq data.</p>
          <p><a href="https://doi.org/10.1186/s12859-024-05773-y">Multimodality integration</a> · <a href="https://doi.org/10.1101/2025.10.07.681011">SpaDiff</a> · <a href="https://github.com/StatCYK/BGS-for-CITEseq">BGS for CITE-seq</a></p>
        </div>
      </article>
      <article class="research-entry research-entry--illustrated">
        <div class="research-entry-media"><img src="{{ '/images/research/microbiome-overview-v2.png' | relative_url }}" alt="Conceptual illustration of diverse microbes in a microbial community"></div>
        <div>
          <h3>Microbiome</h3>
          <p>Fluid Correlation assesses dynamic associations in microbiome data using a nonparametric statistical metric.</p>
          <p><a href="https://doi.org/10.1080/10618600.2024.2444373">Fluid Correlation</a></p>
        </div>
      </article>
      <article class="research-entry research-entry--illustrated">
        <div class="research-entry-media"><img src="{{ '/images/research/biomedical-imaging-overview.png' | relative_url }}" alt="Conceptual illustration of echocardiographic imaging and cardiac surface reconstruction"></div>
        <div>
          <h3>Biomedical imaging</h3>
          <p>Collaborative projects apply statistical and machine learning methods to echocardiography and three-dimensional cardiac morphology reconstruction.</p>
          <p><a href="https://arxiv.org/abs/2505.06105">S2MNet</a></p>
        </div>
      </article>
      <article class="research-entry research-entry--illustrated">
        <div class="research-entry-media"><img src="{{ '/images/research/neuroscience-overview.png' | relative_url }}" alt="Conceptual illustration of neurons and synaptic connections"></div>
        <div>
          <h3>Neuroscience</h3>
          <p>Collaborative work uses statistical methods to study neural activity and connectivity.</p>
          <p><a href="https://doi.org/10.1101/2024.09.11.612511">Neural connectivity</a> · <a href="https://github.com/StatCYK/neural-activity-analysis">Analysis code</a></p>
        </div>
      </article>
    </section>
    <section id="software" role="tabpanel" aria-labelledby="tab-software" tabindex="0">
      <p>Research implementations and analysis workflows associated with my papers.</p>
      <dl class="research-software">
        <div class="research-entry"><dt><a href="https://github.com/StatCYK/SMICE">SMICE</a></dt><dd>Coevolution-guided MSA sampling for exploring protein conformations with AlphaFold.</dd></div>
        <div class="research-entry"><dt><a href="https://github.com/StatCYK/Metamorphic-Classify">Metamorphic-Classify</a></dt><dd>Statistical learning workflows for classifying metamorphic and single-fold proteins.</dd></div>
        <div class="research-entry"><dt><a href="https://github.com/StatCYK/Wahkon">Wahkon</a></dt><dd>A statistically principled deep RKHS superposition network.</dd></div>
        <div class="research-entry"><dt><a href="https://github.com/StatCYK/BGS-for-CITEseq">BGS for CITE-seq</a></dt><dd>Bisection Grover’s search and its application to CITE-seq data analysis.</dd></div>
        <div class="research-entry"><dt><a href="https://github.com/StatCYK/quantum-bootstrap">Quantum Bootstrap</a></dt><dd>Quantum algorithms and experiments for bootstrap computation.</dd></div>
        <div class="research-entry"><dt><a href="https://github.com/StatCYK/neural-activity-analysis">Neural Activity Analysis</a></dt><dd>Analysis code for collaborative research on neural connectivity.</dd></div>
      </dl>
      <p><a href="https://github.com/StatCYK">All repositories on GitHub</a></p>
    </section>
  </section>

  <section class="academic-section" aria-labelledby="news-title">
    <h2 id="news-title">News</h2>
    <ul class="academic-news">
      <li><time datetime="2026">2026</time><span><a href="https://arxiv.org/abs/2512.10066">Classifying Metamorphic versus Single-Fold Proteins</a> accepted by the <em>Annals of Applied Statistics</em>.</span></li>
      <li><time datetime="2026">2026</time><span><a href="https://arxiv.org/abs/2605.14041">Wahkon</a> received a <a href="https://statsupai.org/STAIX2026/awards.html">Best Paper Award at STAI-X</a>.</span></li>
      <li><time datetime="2024">2024</time><span><a href="https://doi.org/10.1080/01621459.2024.2404259">Bisection Grover’s Search</a> published in JASA. <a href="https://franklin.uga.edu/news/stories/2024/uga-researchers-unveil-development-novel-quantum-computing-algorithm">UGA news coverage</a>.</span></li>
      <li><time datetime="2024">2024</time><span>I completed my Ph.D. in Statistics at the University of Georgia and received the Best Senior Ph.D. Student award.</span></li>
      <li><time datetime="2023">2023</time><span>I received a Summer Research Grant from the University of Georgia.</span></li>
      <li><time datetime="2022">2022</time><span>I received the Best Beginning Ph.D. Student award at the University of Georgia.</span></li>
    </ul>
  </section>
</main>
