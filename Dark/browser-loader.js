// ==UserScript==
// @name         GitLab - Theme Loader
// @namespace    GLTweaks
// @version      0.1
// @description  Load GitLab Themes from Github repo
// @author       Jason Croft
// @match        https://<domain>/*
// @grant        none
// ==/UserScript==

(function() {
    // Fetch our CSS in parallel ahead of time
    const cssPath = 'https://raw.githubusercontent.com/jccrofty30/gitlab-themes/master/Dark/<version>/style.css';

    const cssPromise = fetch(cssPath).then(response => response.text());

    // Insert a style tag into the wrapper view
    cssPromise.then(css => {
        let s = document.createElement('style');
        s.type = 'text/css';
        s.innerHTML = css;
        document.head.appendChild(s);
    });
})();
