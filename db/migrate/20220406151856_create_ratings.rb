class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.text :comment
      t.integer :drink_rating
      t.string :user_id
      t.string :drink_id
      t.timestamps
    end
  end
end
