export default function truncate(text, n) {
  var words = text.split(/(?=\s)/gi);
  var indexToStop = words.length;
  var count = 0;
  for (var i = 0; i < words.length && count <= n; i++) {
    if (words[i].trim() != "") {
      if (++count > n) indexToStop = i;
    }
  }
  return {
    truncated: words.slice(0, indexToStop).join(""),
    next: words.slice(indexToStop).join(""),
  };
}
