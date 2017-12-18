var op = '';
var changeScreenToInput = function(target) {
     if (target === 'C') {
          $('#display').text('');
     }
     else if (target === '=') {
          $('#display').text(evaluate(op));
     }
     else if (target === 'Backspace') {
          var string = $('#display').text();
          string = string.substring(0, string.length - 1)
          $('#display').text(string);
     }
     else {
          switch (target) {
               case '/':
                    op = '/';
                    break;
               case 'X':
                    op = 'X';
                    break;
               case '-':
                    op = '-';
                    break;
               case '+':
                    op = '+'
                    break;

          }
          $('#display').text($('#display').text() + target);
     }
};
$('td').click(function(event) {
     changeScreenToInput(event.target.textContent);
});
$(document).keydown(function(event) {
     switch (event.key) {
          case 'Shift':
               return;
               break;
          case 'c':
               changeScreenToInput('C');
               break;
          case 'Enter':
               changeScreenToInput('=');
               break;
          default:
          changeScreenToInput(event.key);
     }
});
var evaluate = function(op) {
     var total;
     var arr = $('#display').text();
     arr = arr.split(RegExp('[^0-9.]+')).map(value => parseFloat(value));
     switch (op) {
          case '/':
               total = arr.reduce((prev, curr) => prev / curr);
               break;
          case 'X':
               total = arr.reduce((prev, curr) => prev * curr);
               break;
          case '-':
               total = arr.reduce((prev, curr) => prev - curr);
               break;
          case '+':
               total = arr.reduce((prev, curr) => prev + curr);
               break;
          default:
     }
     if (isNaN(total)) {
          return 'ERROR';
     }
     return total;
}
