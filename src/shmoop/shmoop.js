/*
 * Copyright 2018 AppNexus Inc.; Conversant, LLC; DMG Media Limited; Index Exchange, Inc.;
 * MediaMath, Inc.; Oath Inc.; Quantcast Corp.; and, Sizmek, Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var privacyVersion = 'privacyV1';
var shmoopCtrl = (function (window) {

    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    var render = function(consentData) {
        // Agree button
        var agreeBtn = document.getElementById('shmoopAgree');
        var privacyLink = document.getElementById('privacyLink');
        agreeBtn.onclick = function() {
            setCookie('shmoop_EU_consent', true, 365);
            setCookie(privacyVersion, true, 1095);
            __cmpui('renderView', 'main');
        };
        privacyLink.onclick = function() {
            __cmpui('renderView', 'privacy');
        };
    };

    return {
        render: render
    };
})(window);

export default shmoopCtrl;