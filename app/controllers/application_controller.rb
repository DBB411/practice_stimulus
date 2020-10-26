class ApplicationController < ActionController::Base
  def hello

  end

  def lists

  end

  def list
    @list = List.find(params[:list_id])
    @items = @list.items.order(:position)
  end

  def list_move_items
    puts("in list_move_items")
    @list = List.find(params[:list_id])
    params[:new_items_order].each_with_index do |id, index|
      @list.items.find(id).tap do |item|
        item.update(position: index)
      end
    end
    respond_to do |format|
      format.json { render json: { success: true, item_position_hash: @list.items.order(:position).pluck(:name, :position).to_h  } }
    end
  end

end
