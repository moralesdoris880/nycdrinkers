class DrinksController < ApplicationController
    def index
        drinks = Drink.all
        render json: drinks, include: [:restaurant]
    end

    def show
        drink = Drink.find_by(id: params[:id])
        if drink
            render json: drink.users
        end
    end
end
