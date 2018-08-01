// // // let i=1
// // // while (i <=100) {
// // //     document.write(i + '<br>');
// // //     i++;
    
// // // }

// // // let number = parseInt(prompt('Please enter number'));
// // // while(isNaN(number)) {
// // //     number = parseInt(prompt('Please enter number'));
// // // }
// // // let number
// // // do {
// // //     number = parseInt(prompt('Please enter number'));
// // // } while(isNaN(number))
// // let productNames = ['TEslaX' , 'BMW X6' , 'Toyota LC200' , 'MB' , 'Ford' , 'Chevlol'];
// // // function prn (val) {
// // //     document.write (val + '<br>')
// // // }
// // // productNames.push('Fiat');
// // // for ( let i = 0; i < productNames.length; i++){
// // //     if( productNames[i][0] === 'T')
// // //     prn(productNames[i]);
// // // }
// // productNames[100] = 'Zaz-Lanos';
// // for (let i = 0; i < productNames.length ; i++){
// // document.write(productNames[i +'<br>']);
// // }
// const TeslaX = {};
// TeslaX.make = 'Tesla';
// TeslaX.model = 'X';
// TeslaX.color = 'color';
// TeslaX.beep = function() {
// }


// //МЕТОД ЦИКЛУ
// function fib(n) {
//     let pre = 1;
//     let prePre = 1;
//     let i;
//     for (i = 3; i <=n; i++) {
//         var next = pre + prePre;
//         prePre = pre;
//         pre = next;
//     }
//     return next;
    
// }
// alert (fib (7));
function fibonacci(num) {
  if (num <= 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
alert (fibonacci(10));