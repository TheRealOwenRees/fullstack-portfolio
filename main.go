package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"os"
)

var (
	//go:embed client/dist
	client embed.FS
)

const defaultPort = "8080"

func main() {
	dist, _ := fs.Sub(client, "client/dist")

	http.Handle(
		"/", http.FileServer(http.FS(dist)),
	)

	port := os.Getenv("PORT")

	if port == "" {
		port = defaultPort
	}

	log.Fatal(http.ListenAndServe(":"+port, nil))
}
