function handleError(err) {
	let errMsg = err;


	if (err instanceof Object) {
		errMsg = err.message || err.error || JSON.stringify(err);
	}


	printColumns(chalk.red("Error: " + errMsg));
	printColumns(
		chalk.white(
			`If you can't settle this, please open an issue at:${EOL}` +
				chalk.cyan(pkg.bugs.url)
		)
	);
	process.exit(1);
}
