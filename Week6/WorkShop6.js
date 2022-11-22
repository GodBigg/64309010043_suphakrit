let item = {
    "A4paper": 120,
    "Ruler": 25,
    "FlashDrive": 130
}

var Order = [{
    "customer" : "Mr.Lee",
    "itemOrder" : [item.A4paper, item.Ruler],
    "Qty" : [5,2],
    "Price" : itemOrder[0]*Qty[0]
}];

console.log(Order[0])