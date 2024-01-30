export async function wait() {
  return new Promise((resolve) => {
    console.log('== wait ==')

    setTimeout(resolve, 1000);
  });
}
