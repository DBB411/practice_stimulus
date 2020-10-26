class AddTableListAndItem < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string :name
    end

    create_table :items do |t|
      t.references :list
      t.string :name
      t.integer :position
    end
  end
end
