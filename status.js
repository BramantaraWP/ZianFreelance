let bandwidth = document.getElementById("bandwidth");
let ping = document.getElementById("ping");
let ram = document.getElementById("ram");
let cpu = document.getElementById("cpu");

function autohorize() {
  bandwidth.innerText = `${Math.floor(Math.random() * 100) + 40} Mbps`;
  ping.innerText = `${Math.floor(Math.random() * 30) + 1}ms`;
  ram.innerText = `${Math.floor(Math.random() * 1000) + 1}Mb/1Tb`;
  cpu.innerText = `${Math.floor(Math.random() * 50) + 5}%`;
  setTimeout(autohorize, 4500);
}

autohorize();
