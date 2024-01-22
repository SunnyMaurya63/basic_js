//  let is block/local scoped
//  var is function scoped

// function diff1(x,y){ // better as we have used let
//       if(x>y){
//         let tmp=x;
//         x=y;
//         y=tmp;
//       }
//       return y-x;
// }
// function diff1(x,y){
//       if(x>y){
//         var tmp=x;
//         x=y;
//         y=tmp;
//       }
//       return y-x;
// }

//--------------------- ----------------------------------------------------

// function repeat1(n){
//     var res;
//     for(var i=0;i<n;i++){
//        // res=fn(res,i);
//     }
//     console.log(i);
//     return res;
// }

// function repeat2(n){ // this is better
//     var res;
//     for(let i=0;i<n;i++){ // as there is no meaning of i after for loop then we should use let instead of var
//         //res=fn(res,i);
//     }
//     console.log(i);
//     return res;
// }

// repeat1(3); // 3 , as we have used var
// repeat2(3); // throws reference error