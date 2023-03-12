let installButton = document.createElement('button');

let prompt;
window.addEventListener('beforeinstallprompt', function(e){
  e.preventDefault();
  prompt = e;
});

installButton.addEventListener('click', function(){
   prompt.prompt();
})

let isInstalled = false;

installButton.addEventListener('click', async function(){
  prompt.prompt();
  let result = await that.prompt.userChoice;
  if (result&&result.outcome === 'accepted') {
     isInstalled = true;
  }
})
window.addEventListener('appinstalled', async function(e) {
    installButton.style.display = "none";
 });

let installable = true;
if (!('serviceWorker' in navigator)){
  installable = false;
}

let installed = false;

window.addEventListener('DOMContentLoaded', function(){
   if (navigator.standalone || window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: fullscreen)').matches || window.matchMedia('(display-mode: minimal-ui)').matches) {
     installed = true;
    }
});

window.addEventListener('DOMContentLoaded', function(){
   window.matchMedia('(display-mode: standalone)').addListener(function(e){
     if (e.matches) { installed = true;}
   });
   window.matchMedia('(display-mode: fullscreen)').addListener(function(e){
     if (e.matches) { installed = true;}
   });
   window.matchMedia('(display-mode: minimal-ui)').addListener(function(e){
     if (e.matches) { installed = true; }
   });
 });

window.addEventListener('appinstalled', function(){
   document.cookie = "appinstalled=true;expires=Tue, 30 Mar 2023 23:59:59 GMT;path=/";
})
  
window.addEventListener('beforeinstallprompt', function(){
  document.cookie = "appinstalled=false;expires=Tue, 30 Mar 2023 23:59:59 GMT;path=/";
})

if ('getInstalledRelatedApps' in window.navigator) {
  let relatedApps = await window.navigator.getInstalledRelatedApps();
  if (relatedApps.length > 0){
     installed = true;
  }
  else {
    installed = false;
  }
}
