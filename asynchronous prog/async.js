const takeOrder = (orderName, cb)=>{

     console.log(`Take ${orderName} order`); 
     cb(orderName);
};


const processOrder = (orderName, cb, time)=>{

       console.log(`${orderName} is processing...`);

       setTimeout(()=>{
           
          console.log(`cooking is complete for ${orderName}`);
          console.log(`${orderName} is processed`);
          cb(orderName);

       },time);

};

const completeOrder = (orderName)=>{

       console.log(`${orderName} is completed`);
};

takeOrder('Customer 1', (orderName)=>{

        processOrder(orderName,(orderName)=>{

            completeOrder(orderName);
        },3000);
});

takeOrder('Customer 2', (orderName)=>{

    processOrder(orderName,(orderName)=>{

        completeOrder(orderName);
    },2000);
});