export default function getSorteddate(a, b) {
  return new Date(b.date) - new Date(a.date);
}
