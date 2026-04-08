

(function enforceExternalLinks(){
  function applyTargets(){
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      
      if(!href || href === '#' || href.startsWith('#')) return;
      
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
  }

 
  applyTargets();

  
  const observer = new MutationObserver(applyTargets);
  observer.observe(document.body, { childList: true, subtree: true });
})();
