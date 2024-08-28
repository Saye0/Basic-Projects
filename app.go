package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", logIP)
	log.Println("Sunucu 8080 portunda çalışıyor...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func logIP(w http.ResponseWriter, r *http.Request) {
	ip := r.RemoteAddr
	logToFile(ip)
	fmt.Fprintf(w, "IP adresiniz kaydedildi: %s", ip)
}

func logToFile(ip string) {
	file, err := os.OpenFile("ips.txt", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		log.Fatalf("Dosya açma hatası: %v", err)
	}
	defer file.Close()

	if _, err := file.WriteString(ip + "\n"); err != nil {
		log.Fatalf("Dosyaya yazma hatası: %v", err)
	}
}
