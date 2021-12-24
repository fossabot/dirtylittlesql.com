const tips = [
      "-- To get a chart instead of a table for your result, run the query with Alt-Enter.\n" +
      "-- The first column in your results will be treated as the X axis of the chart.\n" +
      "-- The remaining columns will be treated as values to plot on the chart.\n\n"
      ,
      "-- You can use Ctrl-S to save the result of your query to a CSV file.\n\n"
      ,
      "-- Use Alt-Left and Alt-Right to move left and right in your query history.\n\n"
];
function* makeShuffleGenerator(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      yield array[i];
    }
    return;
}

const randomTips = makeShuffleGenerator(tips);
