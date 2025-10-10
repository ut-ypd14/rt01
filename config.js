/* ===== API_URL ===== */
window.api_url = "https://script.google.com/macros/s/AKfycbz02U3mY1UTzWFJP6h0EkdTn3DZYAZRg5YnDWvFTncWV9CFibK6XDVj6gIxNx7ehNei/exec";

/* ===== min Tools ===== */
window.epoch = Date.UTC(1899,11,30);
window.now = "";
function tick() {
  const sbT = new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  now = sbT.format(new Date()); 
}
tick();
setInterval(tick, 1000);

// 依 yyyy/mm/dd 取日期序號
window.ymdToSerial = function(Ntime){
  const ymd = Ntime.slice(0, 10);
  const [y,m,d] = ymd.split('/').map(Number);
  return ((Date.UTC(y, m-1, d) - epoch) / 86400000);
}

// 依 yyyy/mm/dd 組合為 yyyymm
window.serialToYM = function(Ntime){
  const ymd = Ntime.slice(0, 10);
  const [y, m, d] = ymd.split('/');
  return Number(y + m.padStart(2,'0'));
}