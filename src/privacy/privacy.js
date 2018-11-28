/*
 * Copyright 2018 AppNexus Inc.; Conversant, LLC; DMG Media Limited; Index Exchange, Inc.;
 * MediaMath, Inc.; Oath Inc.; Quantcast Corp.; and, Sizmek, Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var privacyCtrl = (function (window) {

    var render = function(consentData) {
        // Agree button
        var agreeBtn = document.getElementById('dismissPolicy');
        agreeBtn.onclick = function() {
            __cmpui('renderView', 'shmoop');
        };
    };

    return {
        render: render
    };
})(window);

export default privacyCtrl;