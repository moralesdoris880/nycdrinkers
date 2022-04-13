class Drink < ApplicationRecord
    belongs_to :restaurant
    has_many :ratings, through: :users 
end
