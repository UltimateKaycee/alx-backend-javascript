export default function createIntdataTypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const oneBuffer = new ArrayBuffer(length);
  const intdata = new IntdataArray(oneBuffer, 0, length);
  intdata.set([value], position);
  return new DataView(oneBuffer);
}
