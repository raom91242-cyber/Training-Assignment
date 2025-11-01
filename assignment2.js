function order() {
    console.log("Placing Your Order");
    setTimeout(() => {
        console.log("Order Placed Successfuly");
        setTimeout(() => {
            console.log("Restraunt has started making your food");
            setTimeout(() => {
                console.log("Food Prepared Successfully");
                setTimeout(() => {
                    console.log("You have started eating food ");
                    setTimeout(() => {
                        console.log("Food eated successful");
                    }, 4000);
                }, 3000);
            }, 3000);
        }, 2000);
    }, 2000);
}
order()