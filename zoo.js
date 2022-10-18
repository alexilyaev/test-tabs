function handleError(err) {
	// One
	let errMsg = err;

	if (err instanceof Object) {
		errMsg = err.message || err.error || JSON.stringify(err);
	}

	// Two
	printColumns(chalk.red("Error: 123 " + errMsg));
	printColumns(
		chalk.white(
			`If you can't settle this, please open an issue 123 at:${EOL}` +
				chalk.cyan(pkg.bugs.url)
		)
	);
	// Three
	process.exit(1);
}
