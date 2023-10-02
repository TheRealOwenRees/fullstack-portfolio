export CGO_ENABLED=0
export GOOS=linux
export GOARCH=amd64

.PHONY: clean
clean:
	@rm -rf ./bin

.PHONY: build
build:
	mkdir -p bin
	go build -o bin/main main.go