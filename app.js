const http = require("http");
const fs = require("fs");
const path = require("path");

// Log dosyasının yolu
const logFilePath = path.join(__dirname, "ip_log.txt");

// IP adresini log dosyasına yazan fonksiyon
function logIP(ip) {
  const logEntry = `${new Date().toISOString()} - ${ip}\n`;
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("IP adresi loglanırken hata oluştu:", err);
    }
  });
}

// HTTP sunucusu oluşturma
const server = http.createServer((req, res) => {
  let clientIP = req.socket.remoteAddress;

  // IPv6 localhost'u IPv4 localhost'a çevir
  if (clientIP === "::1") {
    clientIP = "127.0.0.1";
  }

  logIP(clientIP);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("IP adresiniz loglandı.\n");
});

// Sunucuyu belirli bir portta dinlemeye başlama
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda dinleniyor...`);
});
