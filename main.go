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
	port := os.Getenv("PORT")

	if port == "" {
		port = defaultPort
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// set the cache header
		w.Header().Set("Cache-Control", "public, max-age=604800")

		// serve the file
		http.FileServer(http.FS(dist)).ServeHTTP(w, r)
	})

	log.Fatal(http.ListenAndServe(":"+port, nil))
}
