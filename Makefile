develop:
	gatsby develop

build:
	gatsby build

clean:
	gatsby clean

deploy:
	gatsby build --prefix-paths && gh-pages -d public