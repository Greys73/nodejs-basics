import process from "node:process";
import stream from "node:stream";

const transform = async () => {
  const transformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      callback(null, reversedChunk);
    }
  })

  console.log('Write some text:');
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();