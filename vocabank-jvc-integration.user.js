// ==UserScript==
// @name         Intégration Vocabank pour JVC
// @namespace    https://github.com/4sucres/vocabank-jvc-integration/
// @author		 4sucres.org
// @version      1.0
// @match        http://www.jeuxvideo.com/forums/*
// @match        http://m.jeuxvideo.com/forums/*
// @match        http://m.jeuxvideo.com/forums/*
// @match        http://www.jeuxvideo.com/messages-prives/*
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('.bloc-contenu').forEach((el) => {
        let content = el.innerHTML;
        let regex = /<a href="https:\/\/vocabank\.org\/samples\/((?:\d|[a-f]|-)+)".*?>.+?<\/a>/gm;
        let match = content.match(regex);

        let replace = match[0];
        let sampleId = (regex.exec(content)[1]);

        if (match) {
            let markup = '';
            markup += '<iframe width="100%" height="150" scrolling="no" frameborder="no" src="https://vocabank.org/samples/' + sampleId + '/iframe" style="border: 1px solid #c6c6d0;"></iframe>';
            el.innerHTML = content.replace(match[0], markup);
        }
    });
})();
