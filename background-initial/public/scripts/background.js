// Page Visibility API
let backgroundInitialTimestamp;
window.addEventListener('visibilitychange', (e) => {
  if (document.visibilityState === "hidden") {
    // in background
    const now = new Date().toLocaleTimeString();
    log(`Going to background at ${now}`);
    backgroundInitialTimestamp = performance.now();
  } else {
    // back from background
    const timeElapsed = Math.round(performance.now() - backgroundInitialTimestamp);
    log(`Back from the background after ${timeElapsed/1000}s`);
  }
});

// Beacon
document.getElementById("btnBeacon").addEventListener("click", event => {
});

// Background Sync
document.getElementById("btnSync").addEventListener("click", async event => {

});

// Background Periodic Sync
document.getElementById("btnPeriodicSync").addEventListener("click", async event => {
   
});

// Background Fetch
document.getElementById("btnFetch").addEventListener("click", async event => {
   
});