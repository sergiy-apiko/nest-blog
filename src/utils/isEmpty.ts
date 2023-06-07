export default function isEmpty(ob: object) {
  return (
    ob &&
    Object.keys(ob).length === 0 &&
    Object.getPrototypeOf(ob) === Object.prototype
  );
}
