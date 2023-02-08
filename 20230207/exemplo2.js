process.argv.forEach((each, index) => {
    let color = index%2 == 0 ? '33' : '31';
    console.log('\x1b[%sm%s\x1b[0m: %s',color,index,each);
});

const args = process.argv.slice(2);

console.log(args);