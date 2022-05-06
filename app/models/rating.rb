class Rating < ApplicationRecord
    belongs_to :user
    belongs_to :drink


    def self.drinks3
        ratings = self.where("drink_rating >= 3")
        return ratings
    end
end
