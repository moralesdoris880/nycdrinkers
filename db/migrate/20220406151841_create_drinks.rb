class CreateDrinks < ActiveRecord::Migration[7.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.string :ingredients
      t.integer :price
      t.string :image_url
      t.string :restaurant_id
      t.timestamps
    end
  end
end
