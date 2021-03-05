function drawTriangle(size) {

   // Your solution goes here
   let count = 0;
   let chrStr = ""
   while (size > 0) {
      count++;
      while (count > 0) {
         chrStr = chrStr + "*";
         count--;
      }
      count = chrStr.length;
      console.log(chrStr);
      chrStr = "";
      size--;
   }
}

drawTriangle(10);