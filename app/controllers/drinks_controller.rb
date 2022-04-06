class DrinksController < ApplicationController
    def index
        users = Drink.all
        render json: users
    end
end
