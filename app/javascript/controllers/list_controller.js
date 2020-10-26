// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "target1" ]

  initialize(){
    console.log("initialize called")
    this._makeSortable()
  }

  connect() {
    console.log(this)
  }

  disconnect() {
    console.log("initialize called")
  }

  _makeSortable(){
    $(this.element).sortable({
      update: function(e, ui){
        this._requestToMoveListItem(
          ui.item.data("list-item-id"),
          $(this.element).sortable("toArray",{attribute: "item-id"})
        )
      }.bind(this)
    })
  }

  _requestToMoveListItem(resourceId, newItemOrderIds){
    $.ajax({
      url: this.data.get('moveItemsUrl'),
      method: "PUT",
      data: {
        "id": resourceId,
        "new_items_order": newItemOrderIds
      },
      headers:{
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      success: function(data){
        console.log(data)
      }.bind(this),
      error: function(xhr, error){
      }
    })
  }

}
