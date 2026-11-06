(() => {
  const tabs = [...document.querySelectorAll('.research-tabs [role="tab"]')];
  if (!tabs.length) return;
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
  const filters = [...document.querySelectorAll('[data-filter]')];
  const papers = [...document.querySelectorAll('.academic-paper[data-topic]')];
  const topics = new Set(filters.map(button => button.dataset.filter));

  function display(section = 'publications', topic = 'all') {
    if (topic === 'protein') topic = 'biology';
    if (!panels.some(panel => panel.id === section)) section = 'publications';
    if (!topics.has(topic)) topic = 'all';
    tabs.forEach((tab, index) => {
      const selected = panels[index].id === section;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[index].hidden = !selected;
    });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === topic)));
    papers.forEach(paper => {
      paper.hidden = topic === 'all' ? paper.dataset.selected === 'false' : paper.dataset.topic !== topic;
    });
    const count = papers.filter(paper => !paper.hidden).length;
    document.querySelector('.research-count').textContent = count + (topic === 'all' ? ' selected publications' : ' publications');
  }

  function readHash() {
    const [section, topic] = location.hash.slice(1).split('/');
    display(section, topic);
  }
  function navigate(section, topic = 'all') {
    history.replaceState(null, '', '#' + section + (topic === 'all' ? '' : '/' + topic));
    display(section, topic);
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => navigate(panels[index].id));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      tabs[next].focus();
      navigate(panels[next].id);
    });
  });
  filters.forEach(button => button.addEventListener('click', () => navigate('publications', button.dataset.filter)));
  document.querySelectorAll('[data-research-topic]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      navigate('publications', link.dataset.researchTopic);
      tabs[0].focus();
    });
  });
  window.addEventListener('hashchange', readHash);
  readHash();
})();
