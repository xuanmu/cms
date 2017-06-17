var itemController = {};

itemController.items = [];

itemController.setItems = function(){
  itemController.items.splice(0);

  $('.itemID').each(function(i, val){
    var item = {
      id: $($('.itemID').get(i)).val(),
      awardName: $($('.itemAwardName').get(i)).val(),
      title: $($('.itemTitle').get(i)).val(),
      totalNum: $($('.itemTotalNum').get(i)).val(),
      probability: $($('.itemProbability').get(i)).val()
    };
    itemController.items.push(item);
  });

  itemController.itemCount = itemController.items.length;
};

itemController.removeItem = function(itemIndex) {
  itemController.setItems();
  itemController.items.splice(itemIndex, 1);
  itemController.itemCount--;

  utilService.render('itemController', itemController);
};

itemController.addItem = function(item){
  itemController.setItems();
  itemController.items.push(item);
  itemController.itemCount++;

  utilService.render('itemController', itemController);
};

$(document).ready(function(e) {
  utilService.render('itemController', itemController);
});