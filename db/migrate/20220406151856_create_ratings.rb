class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.text :comment
      t.integer :drink_rating
      t.integer :user_id
      t.integer :drink_id
      t.timestamps
    end
  end
end
