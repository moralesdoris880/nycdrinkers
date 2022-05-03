class Drink < ApplicationRecord
    belongs_to :restaurant
    has_many :ratings
    has_many :users, through: :ratings
end

